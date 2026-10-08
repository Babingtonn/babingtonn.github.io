-- ==============================================================================
-- EDITFORGE - SUPABASE SQL SCHEMA
-- Wklej ten kod w: Supabase Dashboard -> SQL Editor -> Kliknij 'RUN'
-- ==============================================================================

-- 1. Tworzymy tabelę na wpisy dziennika ukończonych zadań i audytów AI
create table if not exists public.quest_logs (
  id uuid primary key default gen_random_uuid(),
  quest_id text not null,
  quest_title text not null,
  completed_at text,
  time_spent integer default 25,
  software text not null,
  clip_url text,
  reflection text,
  ai_score integer default 85,
  xp_earned integer default 150,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Włączamy zabezpieczenia Row Level Security (RLS)
alter table public.quest_logs enable row level security;

-- 3. Zezwalamy na publiczny odczyt (SELECT) - dzięki temu każdy rekruter widzi Twoje zadania bez logowania
drop policy if exists "Publiczny odczyt dla wszystkich" on public.quest_logs;
create policy "Publiczny odczyt dla wszystkich"
  on public.quest_logs for select
  using (true);

-- 4. Zezwalamy na dodawanie nowych wpisów (INSERT) przez klucz anon/publishable
drop policy if exists "Zezwalaj na dodawanie logow" on public.quest_logs;
create policy "Zezwalaj na dodawanie logow"
  on public.quest_logs for insert
  with check (true);

-- 5. Opcjonalne dodanie 2 przykładowych wpisów początkowych (żeby tabela nie była pusta)
insert into public.quest_logs (quest_id, quest_title, completed_at, time_spent, software, clip_url, reflection, ai_score, xp_earned)
values 
  ('SND-01', 'The 4-Layer Impact Rule', '06.10.2026', 22, 'Alight Motion', 'https://streamable.com/impact-sample', 'Zbalansowanie sub-basu z riserem zajęło trochę czasu, ale różnica w potędze uderzenia jest gigantyczna.', 88, 150),
  ('PAC-01', 'The 3-Second Hook Architecture', '07.10.2026', 30, 'CapCut', 'https://drive.google.com/hook-sample', 'Dynamiczny zoom w 0:00 i SFX natychmiast zatrzymują wzrok widza.', 84, 160)
on conflict do nothing;
