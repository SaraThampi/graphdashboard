import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

console.log(process.env)

const supabaseUrl = process.env.SUPABASE_URL 
const supabaseKey = process.env.SUPABASE_KEY 

const supabase = createClient(supabaseUrl, supabaseKey);
