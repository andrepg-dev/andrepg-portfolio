import CardBlog from '@/components/blog/card-blog'
import Header from '@/components/global/header'
import { getAllTags, getPostsByTag, getReadingTime } from '@/lib/posts'
import Link from 'next/link'

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ slug: tag }))
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug: tag } = await params
  const posts = getPostsByTag(tag)
  const tags = getAllTags()

  return (
    <main>
      <Header
        description='Thoughts on code, AI agents, and books that shaped how I think.'
        section={
          <Link href={'/blog'} className='hover:underline decoration-double'>
            Blog
          </Link>
        }
      />
      <div className='gap-4 flex flex-col my-4'>
        <nav className='flex flex-wrap items-center gap-2 text-sm font-mono'>
          <Link href={'/blog'} className='hover:underline decoration-double'>
            Tags
          </Link>
          {tags.map((t) => (
            <Link
              key={t}
              href={`/blog/tags/${t}`}
              className={`px-1.5 rounded-sm ${
                t === tag
                  ? 'bg-accent text-white'
                  : 'bg-muted/70 text-white hover:bg-muted'
              }`}
            >
              {t}
            </Link>
          ))}
        </nav>

        <hr className='text-muted' />

        <div className='flex flex-col gap-10'>
          {posts.map((post, idx) => (
            <CardBlog post={post} key={idx} />
          ))}
        </div>

        {posts.length === 0 && (
          <p className='text-muted'>No articles found with this tag yet.</p>
        )}

        <hr className='text-muted' />

        <nav className='flex gap-4 text-sm font-mono'>
          <Link
            href='/blog'
            className='underline decoration-double hover:text-accent'
          >
            ← all posts
          </Link>
          <Link
            href='/'
            className='underline decoration-double hover:text-accent'
          >
            home
          </Link>
        </nav>
      </div>
    </main>
  )
}
