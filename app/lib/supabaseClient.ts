import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_BASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_BASE_ANON_KEY!

export const db = createClient(supabaseUrl, supabaseAnonKey)
