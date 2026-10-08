-- =======================================================
-- EDITFORGE - SUPABASE DATABASE SCHEMA
-- Skopiuj i wklej ten kod do: Supabase Dashboard -> SQL Editor
-- =======================================================

-- 1. Tabela Zadań (Quests)
create table if not exists public.quests (
  id text primary key,
  title text not null,
  subtitle text,
  pillar text not null,
  pillar_name text not null,
  difficulty text not null,
  target_tools text[] not null,
  estimated_minutes integer not null default 30,
  xp_reward integer not null default 150,
  objective text not null,
  constraints text[] not null,
  film_theory text not null,
  mobile_tips text not null,
  desktop_bridge jsonb not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Tabela Wpisów w Dzienniku (Quest Logs)
create table if not exists public.quest_logs (
  id uuid primary key default gen_random_uuid(),
  quest_id text references public.quests(id) on delete cascade,
  quest_title text not null,
  completed_at timestamp with time zone default timezone('utc'::text, now()) not null,
  time_spent integer not null default 25,
  software text not null,
  clip_url text,
  reflection text,
  ai_score integer,
  xp_earned integer not null default 150
);

-- 3. Tabela Statystyk Użytkownika (User Profile / XP)
create table if not exists public.user_profile (
  id uuid primary key default gen_random_uuid(),
  total_xp integer not null default 0,
  level_name text not null default 'Novice Cutter (Lvl 1)',
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Uprawnienia Publiczne (Row Level Security - Read for All, Write for Authenticated)
alter table public.quests enable row level security;
alter table public.quest_logs enable row level security;
alter table public.user_profile enable row level security;

-- Zasady dla rekruterów (Public Read)
create policy "Public quests are viewable by everyone" on public.quests for select using (true);
create policy "Public logs are viewable by everyone" on public.quest_logs for select using (true);
create policy "Public profiles are viewable by everyone" on public.user_profile for select using (true);

-- Zasady dodawania wpisów
create policy "Anyone can insert logs" on public.quest_logs for insert with check (true);
