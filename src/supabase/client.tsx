import { createClient } from "@supabase/supabase-js";

export const client = createClient(
  import.meta.env.VITE_REACT_APP_SUPABASE_URL as string,
  import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY as string
);

