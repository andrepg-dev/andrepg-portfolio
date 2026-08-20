import { formatDate } from '@/lib/posts'
import Image from 'next/image'
import Link from 'next/link'

export default function CardBlog({
  post,
}: {
  post: {
    slug: string
    title: string
    author: string
    date: string
    excerpt: string
    content: string
    tags: string[]
    image?: string
  }
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      key={post.slug}
      className='flex flex-row border-black/20 group my-4 gap-4'
    >
      <div className='flex flex-col justify-center flex-1 min-w-0'>
        <h2 className='mt-1 text-accent'>{post.title}</h2>

        <p className='text-muted mt-1 line-clamp-2'>{post.excerpt}</p>
        <div className='flex items-center gap-3 mt-2 text-sm font-mono text-muted'>
          <span>{formatDate(post.date)}</span>
          <span>|</span>
          <span>Author: {post.author}</span>
        </div>
      </div>

      {post.image && (
        <div className='relative w-40 h-auto min-h-[120px] shrink-0 overflow-hidden'>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className='object-cover'
          />
        </div>
      )}
    </Link>
  )
}
