import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kpwvzjexcujznwxeqnsg.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtwd3Z6amV4Y3Vqem53eGVxbnNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3OTY2NjAsImV4cCI6MjAxMDM3MjY2MH0.sWG4l8Y5SAqXiMn48T4xlKI2mkg383YbZ7nPx-N4bnI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
