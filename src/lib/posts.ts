import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
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

const CONTENT_DIR = path.join(process.cwd(), 'content/blog')

function readingTime(content: string): string {
  const words = content.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.round(words / 200))
  return `${minutes} min read`
}

export function getReadingTime(content: string): string {
  return readingTime(content)
}

function getAllMarkdownFiles(): Post[] {
  if (!fs.existsSync(CONTENT_DIR)) return []

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'))

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8')
    const { data, content } = matter(raw)
    const slug = file.replace(/\.md$/, '')

    return {
      slug,
      title: data.title ?? slug,
      author: data.author ?? 'André Ponce',
      date: data.date ?? new Date().toISOString(),
      tags: data.tags ?? [],
      excerpt: data.excerpt ?? content.slice(0, 160),
      content,
      html: marked(content) as string,
      image: data.image,
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
