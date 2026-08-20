import fs from 'fs'
import path from 'path'
import { marked } from 'marked'

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
  return content.replace(/#\w+/g, '').replace(/\n{3,}/g, '\n\n').trim()
}

function convertObsidianEmbeds(content: string): string {
  return content.replace(
    /!\[\[([^\]|]+)(?:\|(\d+))?\]\]/g,
    (_, filename, width) => {
      const size = width ? ` width="${width}"` : ''
      return `<img src="/Notes/${filename}" alt="${filename}"${size} />`
    }
  )
}

function getAllMarkdownFiles(): Post[] {
  if (!fs.existsSync(NOTES_DIR)) return []

  const files = fs.readdirSync(NOTES_DIR).filter((f) => f.endsWith('.md'))

  return files.map((file) => {
    const filePath = path.join(NOTES_DIR, file)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const stat = fs.statSync(filePath)
    const slug = file
      .replace(/\.md$/, '')
      .toLowerCase()
      .replace(/\s+/g, '-')
    const title = slug
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase())
    const tags = extractTags(raw)
    const cleanContent = stripTags(raw)
    const processedContent = convertObsidianEmbeds(cleanContent)

    return {
      slug,
      title,
      author: 'André Ponce',
      date: stat.mtime.toISOString(),
      tags,
      excerpt: cleanContent.slice(0, 160),
      content: processedContent,
      html: marked(processedContent) as string,
    }
  })
}

export function getAllPosts(): Post[] {
  return getAllMarkdownFiles().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
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
