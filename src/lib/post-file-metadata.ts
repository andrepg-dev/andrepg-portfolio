import fs from 'node:fs'
import path from 'node:path'

const notesDirectory = path.join(process.cwd(), 'public/Notes')

function slugify(name: string) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function titleFromFilename(filename: string) {
  return filename
    .replace(/\.md$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function getPostTitleBySlug(slug: string) {
  if (!fs.existsSync(notesDirectory)) return undefined

  const filename = fs
    .readdirSync(notesDirectory)
    .find(
      (entry) =>
        entry.endsWith('.md') &&
        slugify(entry.replace(/\.md$/, '')) === slug,
    )

  return filename ? titleFromFilename(filename) : undefined
}
