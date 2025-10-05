import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface Booking {
  id?: string;
  tour_id: number;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  number_of_people: number;
  tour_date: string;
  transportation: string;
  special_requests?: string;
  total_amount: number;
  status?: 'pending' | 'confirmed' | 'cancelled';
  created_at?: string;
  updated_at?: string;
}

export async function createBooking(booking: Booking) {
  if (!supabase) {
    throw new Error('Supabase is not configured');
  }

  const { data, error } = await supabase
    .from('bookings')
    .insert([booking])
    .select()
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to create booking: ${error.message}`);
  }

  return data;
}

export async function getBookingsByEmail(email: string) {
  if (!supabase) {
    throw new Error('Supabase is not configured');
  }

  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('customer_email', email)
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(`Failed to fetch bookings: ${error.message}`);
  }

  return data;
}
