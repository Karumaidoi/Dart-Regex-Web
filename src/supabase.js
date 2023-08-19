import { createClient } from '@supabase/supabase-js';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhbmx0b3Nib3ppcnRheGx0YnRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI0NjY0ODMsImV4cCI6MjAwODA0MjQ4M30.mVMaYbe9A0eR2g3xGBMyjFJAnwsqs7Q5XnP_0VuSIDk';

export const supabase = createClient(
  'https://panltosbozirtaxltbtb.supabase.co',
  supabaseKey,
);
