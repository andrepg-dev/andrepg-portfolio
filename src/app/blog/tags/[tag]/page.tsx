import Link from 'next/link'
import {
  getAllTags,
  getPostsByTag,
  formatDate,
  getReadingTime,
} from '@/lib/posts'

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }))
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params
  const posts = getPostsByTag(tag)
  const tags = getAllTags()

  return (
    <main className='mx-auto w-full max-w-3xl px-6 py-24 text-lg'>
      <div className='gap-6 flex flex-col'>
        <div>
          <p className='text-sm font-mono text-muted mb-1'>
            <Link href='/blog' className='hover:text-accent transition-colors duration-300'>
              blog
            </Link>
            {' / '}
            {tag}
          </p>
          <h1 className='text-3xl font-bold mb-2'>Tag: {tag}</h1>
          <p className='text-muted'>
            {posts.length} {posts.length === 1 ? 'article' : 'articles'} tagged with &ldquo;{tag}&rdquo;
          </p>
        </div>

        <nav className='flex flex-wrap items-center gap-2 text-sm font-mono'>
          <Link
            href='/blog'
            className='px-1.5 rounded-sm bg-muted/70 text-white hover:bg-muted'
          >
            all
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
              <time className='text-sm text-muted font-mono'>
                {formatDate(post.date)}
              </time>
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
                    {i < post.tags.length - 1 && <span className='ml-1'>·</span>}
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
          <Link href='/blog' className='underline decoration-double hover:text-accent'>
            ← all posts
          </Link>
          <Link href='/' className='underline decoration-double hover:text-accent'>
            home
          </Link>
        </nav>
      </div>
    </main>
  )
}
