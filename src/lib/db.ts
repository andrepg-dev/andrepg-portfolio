import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

const supabase = createClient(supabaseUrl, supabaseKey)

export async function hasLiked(slug: string, clientId: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('post_likes')
    .select('slug')
    .eq('slug', slug)
    .eq('client_id', clientId)
    .maybeSingle()

  if (error) {
    console.error('Error checking like:', error.message)
    return false
  }

  return Boolean(data)
}

export async function getLikes(slug: string): Promise<number> {
  const { count, error } = await supabase
    .from('post_likes')
    .select('slug', { count: 'exact', head: true })
    .eq('slug', slug)

  if (error) {
    console.error('Error fetching likes:', error.message)
    return 0
  }

  return count ?? 0
}

export async function addLike(slug: string, clientId: string): Promise<void> {
  const { error } = await supabase
    .from('post_likes')
    .upsert({ slug, client_id: clientId }, { onConflict: 'slug,client_id', ignoreDuplicates: true })

  if (error) {
    console.error('Error adding like:', error.message)
  }
}

export async function removeLike(slug: string, clientId: string): Promise<void> {
  const { error } = await supabase
    .from('post_likes')
    .delete()
    .eq('slug', slug)
    .eq('client_id', clientId)

  if (error) {
    console.error('Error removing like:', error.message)
  }
}
