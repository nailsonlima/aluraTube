import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://rfdhlibnpsdolzgumckb.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmZGhsaWJucHNkb2x6Z3VtY2tiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0NjI1NzcsImV4cCI6MTk4NDAzODU3N30.iZiF6Jy1Upf8AntP9GyFVwBAUwU30Pq8FzKWel27P2I";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}