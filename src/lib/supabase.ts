import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Booking {
  id: string;
  user_id: string;
  date: string;
  time: string;
  guests: number;
  table_preference: string;
  name: string;
  email: string;
  phone: string;
  special_requests?: string;
  status: 'confirmed' | 'cancelled' | 'completed';
  created_at: string;
}