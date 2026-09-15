import { createOgImage } from '@/lib/og-image'

export const runtime = 'nodejs'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || "Andre Ponce's Blog"

    return createOgImage(title)
  } catch (error) {
    console.error('OG error:', error)
    return new Response('Failed', { status: 500 })
  }
}
