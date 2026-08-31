import CardBlog from '@/components/blog/card-blog'
import Footer from '@/components/global/footer'
import Header from '@/components/global/header'
import { getAllPosts, getAllTags } from '@/lib/posts'
import Link from 'next/link'

export default function BlogPage() {
  const posts = getAllPosts()
  const tags = getAllTags()

  return (
    <>
      <Header
        description='Exploring insights about software development, AI, and continuous learning.'
        section='Blog'
      />

      <nav className='flex flex-wrap gap-2 text-sm font-mono my-4'>
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
      <section className='mt-2 my-4 gap-8 flex flex-col'>
        {posts.map((post, idx) => (
          <CardBlog post={post} key={idx} />
        ))}
      </section>

      <Footer />
    </>
  )
}
