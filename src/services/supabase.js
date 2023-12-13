import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qumrpdspufqnciuyebdv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1bXJwZHNwdWZxbmNpdXllYmR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIxOTc2NjYsImV4cCI6MjAxNzc3MzY2Nn0.DAir4lyWPWLRQkNHK0s-nYyjl-g_Kw6FZ03TdelHDO8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
