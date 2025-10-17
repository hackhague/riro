create extension if not exists "pgcrypto";

create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  service text not null,
  service_label text not null,
  date_iso text,
  date_display text,
  time_slot text not null,
  first_name text not null,
  last_name text not null,
  email text,
  phone text not null,
  street text not null,
  postal_code text not null,
  city text not null,
  message text,
  status text not null default 'new',
  source text not null default 'website',
  approval_token text not null,
  metadata jsonb
);

create index if not exists appointments_created_at_idx on public.appointments (created_at desc);
create index if not exists appointments_status_idx on public.appointments (status);
create index if not exists appointments_approval_token_idx on public.appointments (approval_token);
