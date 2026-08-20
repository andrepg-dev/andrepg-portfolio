import CardBlog from '@/components/blog/card-blog'
import Header from '@/components/global/header'
import { getAllPosts, getAllTags } from '@/lib/posts'
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
        <div className='flex flex-col gap-8'>
          {posts.map((post, idx) => (
            <CardBlog post={post} key={idx} />
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
