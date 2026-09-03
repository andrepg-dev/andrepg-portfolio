'use client'

import { useState, useEffect, useCallback } from 'react'

interface LikeResponse {
  count: number
  liked: boolean
}

function getClientId(): string {
  let id = localStorage.getItem('blog-client-id')
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem('blog-client-id', id)
  }
  return id
}

export default function LikeButton({ slug }: { slug: string }) {
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(0)

  const refresh = useCallback(
    async (clientId: string) => {
      const res = await fetch(`/api/likes?slug=${encodeURIComponent(slug)}&clientId=${encodeURIComponent(clientId)}`)
      const data: LikeResponse = await res.json()
      setCount(data.count)
      setLiked(data.liked)
    },
    [slug],
  )

  useEffect(() => {
    const clientId = getClientId()
    refresh(clientId)
  }, [refresh])

  async function toggle() {
    const clientId = getClientId()
    const next = !liked
    setLiked(next)
    setCount((c) => (next ? c + 1 : Math.max(0, c - 1)))

    const res = await fetch('/api/likes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, clientId, like: next }),
    })
    const data: LikeResponse = await res.json()
    setCount(data.count)
    setLiked(data.liked)
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
