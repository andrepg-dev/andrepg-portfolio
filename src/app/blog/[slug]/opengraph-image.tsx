import { createOgImage, ogImageSize } from '@/lib/og-image'
import { getPostTitleBySlug } from '@/lib/post-file-metadata'
import { notFound } from 'next/navigation'

export const alt = 'Essay by André Ponce'
export const size = ogImageSize
export const contentType = 'image/png'

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const title = getPostTitleBySlug(slug)

  if (!title) {
    notFound()
  }

  return createOgImage(title)
}
