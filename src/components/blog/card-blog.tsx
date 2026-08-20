import { getReadingTime } from '@/lib/posts'
import Link from 'next/link'

export default function CardBlog({
  post,
}: {
  post: {
    slug: string
    title: string
    excerpt: string
    content: string
    tags: string[]
  }
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      key={post.slug}
      className='bg-muted/10 px-5 py-4 rounded-xl border border-black/20 group'
    >
      <h2 className='mt-1 group-hover:text-accent transition-colors'>
        {post.title}
      </h2>

      <p className='text-muted mt-1'>{post.excerpt}</p>
      <div className='flex items-center gap-3 mt-2 text-sm font-mono text-muted'>
        <span>{getReadingTime(post.content)}</span>
        <span>·</span>
        {post.tags.map((tag, i) => (
          <span key={tag} className='hover:text-accent transition-colors'>
            #{tag}
            {i < post.tags.length - 1 && <span className='ml-1'>·</span>}
          </span>
        ))}
      </div>
    </Link>
  )
}
