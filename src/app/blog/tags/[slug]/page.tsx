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
          {posts.map((post) => (
            <article key={post.slug}>
              <h2 className='text-xl mt-1'>
                <Link
                  href={`/blog/${post.slug}`}
                  className='hover:text-accent transition-colors duration-300'
                >
                  {post.title}
                </Link>
              </h2>
              <p className='text-muted mt-1'>{post.excerpt}</p>
              <div className='flex items-center gap-3 mt-2 text-sm font-mono text-muted'>
                <span>{getReadingTime(post.content)}</span>
                <span>·</span>
                {post.tags.map((t, i) => (
                  <span key={t}>
                    <Link
                      href={`/blog/tags/${t}`}
                      className='hover:text-accent transition-colors duration-300'
                    >
                      #{t}
                    </Link>
                    {i < post.tags.length - 1 && (
                      <span className='ml-1'>·</span>
                    )}
                  </span>
                ))}
              </div>
            </article>
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
