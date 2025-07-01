// filepath: c:\Users\westc\art-platform\src\lib\supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://pkpfjpwbjvwreoiznloa.supabase.co'; // Replace with your Supabase URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrcGZqcHdianZ3cmVvaXpubG9hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwODk4NDEsImV4cCI6MjA2MDY2NTg0MX0.BgYIdXvEwJo97aLTEauIwTCxtQOISi2Dm1zQo_UhAYU'; // Replace with your Supabase anon key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);