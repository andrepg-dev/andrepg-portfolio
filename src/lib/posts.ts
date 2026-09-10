import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Marked } from 'marked'
import hljs from 'highlight.js'
import { markedHighlight } from 'marked-highlight'
import katex from 'katex'

const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code: string, lang: string) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value
      }
      return hljs.highlightAuto(code).value
    },
  }),
)

marked.use({
  walkTokens(token) {
    if (token.type === 'text' && token.text) {
      token.text = token.text.replace(/->/g, '→')
    }
  },
})

export interface Post {
  slug: string
  title: string
  author: string
  date: string
  tags: string[]
  excerpt: string
  content: string
  html: string
  image?: string
}

const NOTES_DIR = path.join(process.cwd(), 'public/Notes')

function readingTime(content: string): string {
  const words = content.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.round(words / 200))
  return `${minutes} min read`
}

export function getReadingTime(content: string): string {
  return readingTime(content)
}

function extractTags(content: string): string[] {
  const matches = content.match(/#([\w-]+)/g)
  if (!matches) return []
  return [...new Set(matches.map((t) => t.slice(1)))]
}

function stripTags(content: string): string {
  return content
    .replace(/#\w+/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function convertObsidianEmbeds(content: string): string {
  return content.replace(
    /!\[\[([^\]|]+)(?:\|(\d+))?\]\]/g,
    (_, filename, width) => {
      const size = width ? ` width="${width}"` : ''
      return `<img src="/Notes/${filename}" alt="${filename}"${size} />`
    },
  )
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function convertObsidianLinks(content: string): string {
  return content.replace(/\[\[([^\]]+)\]\]/g, (_, noteName) => {
    const slug = slugify(noteName)
    return `[${noteName}](/blog/${slug})`
  })
}

function convertLatex(content: string): string {
  let result = content
  result = result.replace(/\$\$([\s\S]+?)\$\$/g, (_, tex) => {
    try {
      return katex.renderToString(tex.trim(), { displayMode: true, throwOnError: false })
    } catch {
      return `<pre>${tex}</pre>`
    }
  })
  result = result.replace(/\$([^\n$]+?)\$/g, (_, tex) => {
    try {
      return katex.renderToString(tex.trim(), { displayMode: false, throwOnError: false })
    } catch {
      return `<code>${tex}</code>`
    }
  })
  return result
}

function getAllMarkdownFiles(): Post[] {
  if (!fs.existsSync(NOTES_DIR)) return []

  const files = fs.readdirSync(NOTES_DIR).filter((f) => f.endsWith('.md'))

  return files.map((file) => {
    const filePath = path.join(NOTES_DIR, file)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(raw)
    const stat = fs.statSync(filePath)
    const baseName = file.replace(/\.md$/, '')
    const slug = slugify(baseName)
    const title = baseName
      .replace(/[-_]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
    const tags = extractTags(content)
    const cleanContent = stripTags(content)
    const processedContent = convertLatex(
      convertObsidianLinks(convertObsidianEmbeds(cleanContent)),
    )

    return {
      slug,
      title,
      author: 'André Ponce',
      date: (data.created ? new Date(data.created) : stat.mtime).toISOString(),
      tags,
      excerpt: cleanContent.slice(0, 160),
      content: processedContent,
      html: marked.parse(processedContent) as string,
    }
  })
}

export function getAllPosts(): Post[] {
  return getAllMarkdownFiles().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllMarkdownFiles().find((p) => p.slug === slug)
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter((p) => p.tags.includes(tag))
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  getAllPosts().forEach((p) => p.tags.forEach((t) => tags.add(t)))
  return Array.from(tags).sort()
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
