import CardBlog from '@/components/blog/card-blog'
import Footer from '@/components/global/footer'
import Header from '@/components/global/header'
import { getAllTags, getPostsByTag } from '@/lib/posts'
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
    <>
      <Header
        description='Thoughts on code, AI agents, and books that shaped how I think.'
        section={
          <Link href={'/blog'} className='hover:underline decoration-double'>
            Blog
          </Link>
        }
      />
      <nav className='flex flex-wrap items-center gap-2 text-sm font-mono my-4'>
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

      <section className='my-4 gap-8 flex flex-col'>
        {posts.map((post, idx) => (
          <CardBlog post={post} key={idx} />
        ))}

        {posts.length === 0 && (
          <p className='text-muted'>No articles found with this tag yet.</p>
        )}
      </section>

      <Footer />
    </>
  )
}
