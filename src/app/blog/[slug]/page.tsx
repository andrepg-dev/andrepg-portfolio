import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug, formatDate, getReadingTime } from '@/lib/posts'

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const paragraphs = post.content.split('\n\n')

  return (
    <main className='mx-auto w-full max-w-3xl px-6 py-24 text-lg'>
      <div className='gap-6 flex flex-col'>
        <article>
          <header>
            <h1 className='text-3xl font-bold'>{post.title}</h1>
            <div className='flex items-center gap-3 mt-2 text-sm font-mono text-muted'>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
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
                  {i < post.tags.length - 1 && <span className='ml-1'>·</span>}
                </span>
              ))}
            </div>
          </header>

          <hr className='my-6 text-muted' />

          <div className='flex flex-col gap-6'>
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>

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
