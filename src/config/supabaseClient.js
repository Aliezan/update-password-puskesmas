import { createClient } from "@supabase/supabase-js"

const supabaseUrl = 'https://uwgkimaygelketbylzpn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3Z2tpbWF5Z2Vsa2V0YnlsenBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU4NTgyNjYsImV4cCI6MTk5MTQzNDI2Nn0._nVZd3khOVlESProZBqa97fas-pKe8d6waTL4fqqTQs'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
