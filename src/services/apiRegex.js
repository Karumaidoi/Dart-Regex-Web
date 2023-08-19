import { supabase } from '../supabase';
import { data as regexData } from '../data/regex';

export async function postRegex() {
  const { data, error } = await supabase
    .from('Regex Table')
    .insert([...regexData])
    .select();

  if (error) {
    throw new Error('Unable to POST data');
  }

  return data;
}

export async function getRegex() {
  let { data, error } = await supabase.from('Regex Table').select('*');

  if (error) {
    throw new Error('Unable to GET data');
  }

  return data;
}
