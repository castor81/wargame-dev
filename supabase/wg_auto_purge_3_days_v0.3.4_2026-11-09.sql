-- Wargame Studio DEMÓ: a wg_rooms és wg_events tételek automatikus törlése 3 nap után.
-- Alkalmazva a KM-dev Supabase projekten (migráció: wg_auto_purge_3_days), 2026-11-09.
create or replace function public.wg_purge_old()
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare n_ev bigint; n_rm bigint;
begin
  delete from public.wg_events where created_at < now() - interval '3 days';
  get diagnostics n_ev = row_count;
  delete from public.wg_rooms where updated_at < now() - interval '3 days';
  get diagnostics n_rm = row_count;
  delete from public.wg_events e where not exists (select 1 from public.wg_rooms r where r.room = e.room);
  return jsonb_build_object('events_deleted', n_ev, 'rooms_deleted', n_rm);
end $$;

revoke all on function public.wg_purge_old() from public, anon, authenticated;

create extension if not exists pg_cron;
select cron.unschedule('wg-purge-old') where exists (select 1 from cron.job where jobname = 'wg-purge-old');
select cron.schedule('wg-purge-old', '17 3 * * *', $cron$select public.wg_purge_old()$cron$);
select public.wg_purge_old();
