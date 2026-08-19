import { getAllPosts, getAllTags, getReadingTime } from '@/lib/posts'
import Link from 'next/link'
import { ThemeToggle } from '../theme-toggle'

export default function BlogPage() {
  const posts = getAllPosts()
  const tags = getAllTags()

  return (
    <main className='mx-auto w-full max-w-2xl px-6 py-24'>
      <div className='flex items-center justify-between'>
        <h3 className='text-2xl flex flex-col'>
          <span className='font-medium'>
            <Link href={'/'} className='hover:underline decoration-double'>
              Andre Ponce's{' '}
            </Link>
            | Blog
          </span>
          <p className='text-base flex flex-col justify-end mb-1 text-muted'>
            Thoughts on code, AI agents, and books that shaped how I think.
          </p>
        </h3>
        <ThemeToggle />
      </div>

      <div className='gap-4 flex flex-col mt-4 text-xl'>
        <nav className='flex flex-wrap gap-2 text-sm font-mono'>
          Tags
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tags/${tag}`}
              className='px-1.5 rounded-sm bg-muted/70 text-white hover:bg-muted'
            >
              {tag}
            </Link>
          ))}
        </nav>

        <hr className='text-muted' />
        <div className='flex flex-col gap-10'>
          {posts.map((post) => (
            <article key={post.slug}>
              <h2 className='mt-1'>
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
                {post.tags.map((tag, i) => (
                  <span key={tag}>
                    <Link
                      href={`/blog/tags/${tag}`}
                      className='hover:text-accent transition-colors duration-300'
                    >
                      #{tag}
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

        <hr className='text-muted' />

        <nav className='flex gap-4 text-sm font-mono'>
          <Link
            href='/'
            className='underline decoration-double hover:text-accent'
          >
            ← home
          </Link>
          <Link
            href='/projects'
            className='underline decoration-double hover:text-accent'
          >
            projects
          </Link>
          <Link
            href='/certifications'
            className='underline decoration-double hover:text-accent'
          >
            certifications
          </Link>
        </nav>
      </div>
    </main>
  )
}
