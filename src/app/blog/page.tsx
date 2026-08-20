import Header from '@/components/global/header'
import { getAllPosts, getAllTags, getReadingTime } from '@/lib/posts'
import Link from 'next/link'

export default function BlogPage() {
  const posts = getAllPosts()
  const tags = getAllTags()

  return (
    <main>
      <Header
        description='Thoughts on code, AI agents, and books that shaped how I think.'
        section='Blog'
      />

      <article className='gap-4 flex flex-col my-4 text-xl'>
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
            <article key={post.slug} className='bg-red-50'>
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
      </article>
    </main>
  )
}
