import { NextResponse } from 'next/server'
import {
  addLike,
  getLikes,
  hasLiked,
  removeLike,
} from '@/lib/db'

export const runtime = 'nodejs'

interface LikeRequest {
  slug?: string
  clientId?: string
  like?: boolean
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  const clientId = searchParams.get('clientId')

  if (!slug) {
    return NextResponse.json({ error: 'Missing slug' }, { status: 400 })
  }

  const [count, liked] = await Promise.all([
    getLikes(slug),
    clientId ? hasLiked(slug, clientId) : Promise.resolve(false),
  ])

  return NextResponse.json({ slug, count, liked })
}

export async function POST(request: Request) {
  let body: LikeRequest
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
  }

  const { slug, clientId, like } = body
  if (!slug || !clientId || typeof like !== 'boolean') {
    return NextResponse.json(
      { error: 'Missing slug, clientId, or like' },
      { status: 400 },
    )
  }

  if (like) {
    await addLike(slug, clientId)
  } else {
    await removeLike(slug, clientId)
  }

  const [count, liked] = await Promise.all([
    getLikes(slug),
    hasLiked(slug, clientId),
  ])

  return NextResponse.json({ slug, count, liked })
}
