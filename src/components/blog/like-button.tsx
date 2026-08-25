'use client'

import { useState, useEffect } from 'react'

export default function LikeButton({ slug }: { slug: string }) {
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const likes = JSON.parse(localStorage.getItem('blog-likes') || '{}')
    const likedPosts = JSON.parse(localStorage.getItem('blog-liked-posts') || '[]')
    setCount(likes[slug] || 0)
    setLiked(likedPosts.includes(slug))
  }, [slug])

  function toggle() {
    const likes = JSON.parse(localStorage.getItem('blog-likes') || '{}')
    const likedPosts: string[] = JSON.parse(localStorage.getItem('blog-liked-posts') || '[]')

    if (liked) {
      likes[slug] = Math.max(0, (likes[slug] || 0) - 1)
      likedPosts.splice(likedPosts.indexOf(slug), 1)
    } else {
      likes[slug] = (likes[slug] || 0) + 1
      likedPosts.push(slug)
    }

    localStorage.setItem('blog-likes', JSON.stringify(likes))
    localStorage.setItem('blog-liked-posts', JSON.stringify(likedPosts))
    setCount(likes[slug])
    setLiked(!liked)
  }

  return (
    <button
      onClick={toggle}
      className='flex items-center gap-2 text-sm font-mono transition-colors hover:text-accent'
    >
      <span className={liked ? 'text-accent' : ''}>{liked ? '♥' : '♡'}</span>
      <span>{count}</span>
    </button>
  )
}
