import {
  formatDate,
  getAllPosts,
  getPostBySlug,
  getReadingTime,
} from '@/lib/posts'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
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
        </article>

        <hr className='text-muted' />

        <nav className='flex gap-4 text-sm font-mono'>
          <Link
            href='/blog'
            className='underline decoration-double hover:text-accent'
          >
            ← back to the blog
          </Link>
          <Link
            href='/'
            className='underline decoration-double hover:text-accent'
          >
            home
          </Link>
        </nav>
      </div>
    </>
  )
}
