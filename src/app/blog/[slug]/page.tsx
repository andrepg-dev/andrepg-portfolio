import type { Metadata } from 'next'
import {
  formatDate,
  getAllPosts,
  getPostBySlug,
  getReadingTime,
} from '@/lib/posts'
import LikeButton from '@/components/blog/like-button'
import Footer from '@/components/global/footer'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {}
  }

  const ogUrl = `/api/og?title=${encodeURIComponent(post.title)}&author=${encodeURIComponent(post.author)}`
  const shortExcerpt = post.excerpt.substring(0, 120)

  return {
    title: post.title,
    description: shortExcerpt,
    openGraph: {
      title: post.title,
      description: shortExcerpt,
      type: 'article',
      url: `https://andre.zot.so/blog/${slug}`,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: shortExcerpt,
      images: [ogUrl],
    },
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <div className='gap-6 flex flex-col'>
        <article>
          {post.image && (
            <div className='relative w-full h-64 mb-6 rounded-xl overflow-hidden'>
              <Image
                src={post.image}
                alt={post.title}
                fill
                className='object-cover'
                priority
              />
            </div>
          )}

          <header className='relative'>
            <h1 className='text-4xl font- text-accent'>{post.title}</h1>
          </header>

          <div className='flex items-center gap-3 mt-2 text-sm font-mono text-muted mb-4'>
            <span>Date: {formatDate(post.date)}</span>
            <span>|</span>
            <span>Estimated: {getReadingTime(post.content)}</span>
            <span>|</span>
            <span>
              Author:{' '}
              <Link
                href={'/'}
                className='underline decoration-double hover:text-accent'
              >
                Andre Ponce
              </Link>
            </span>
          </div>

          <div
            className='prose max-w-none text-xl'
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <nav className='flex flex-wrap items-center gap-2 text-sm font-mono mt-6'>
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tags/${tag}`}
                className='px-1.5 bg-black/70 text-white hover:bg-muted'
              >
                {tag}
              </Link>
            ))}
          </nav>

          <div className='mt-4'>
            <LikeButton slug={post.slug} />
          </div>
        </article>
      </div>

      <Footer />
    </>
  )
}
