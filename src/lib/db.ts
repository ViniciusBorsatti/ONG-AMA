import type { SupabaseClient } from '@supabase/supabase-js';
import type { Animal } from '../data/animais';
import { supabasePublico, supabaseConfigurado } from './supabase';

function cliente(c?: SupabaseClient) {
  return c ?? supabasePublico();
}

export async function listarAnimais(c?: SupabaseClient): Promise<Animal[]> {
  if (!supabaseConfigurado) return [];
  try {
    const { data, error } = await cliente(c)
      .from('animais')
      .select('*')
      .order('status', { ascending: true })
      .order('created_at', { ascending: false });
    if (error) throw new Error(error.message);
    return (data ?? []) as Animal[];
  } catch (e) {
    // Sem banco, o site continua no ar, só sem a lista.
    console.error('Falha ao listar animais:', e);
    return [];
  }
}

export async function buscarAnimal(slug: string, c?: SupabaseClient): Promise<Animal | null> {
  if (!supabaseConfigurado) return null;
  const { data, error } = await cliente(c).from('animais').select('*').eq('slug', slug).maybeSingle();
  if (error) throw new Error(error.message);
  return (data as Animal) ?? null;
}

export async function buscarAnimalPorId(id: string, c?: SupabaseClient): Promise<Animal | null> {
  if (!supabaseConfigurado) return null;
  const { data, error } = await cliente(c).from('animais').select('*').eq('id', id).maybeSingle();
  if (error) throw new Error(error.message);
  return (data as Animal) ?? null;
}

export function separar(animais: Animal[]) {
  const disponiveis = animais.filter((a) => a.status === 'disponivel');
  const adotados = animais
    .filter((a) => a.status === 'adotado')
    .sort((a, b) => (b.data_adocao ?? '').localeCompare(a.data_adocao ?? ''));
  return { disponiveis, adotados };
}
