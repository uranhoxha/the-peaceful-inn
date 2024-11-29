import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hyaelyjqffyxsgfaimru.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5YWVseWpxZmZ5eHNnZmFpbXJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyMjczNTQsImV4cCI6MjAzNDgwMzM1NH0.Vhc0PEjR5aBUxYWXQaEGZNC83yTJ8ANrT-m7pg3iAlA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
