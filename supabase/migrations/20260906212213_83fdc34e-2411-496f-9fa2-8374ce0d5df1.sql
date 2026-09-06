DROP FUNCTION IF EXISTS public.registration_counts();

CREATE OR REPLACE FUNCTION public.enforce_registration_capacity()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  cap int;
  used int;
BEGIN
  cap := CASE NEW.category
    WHEN 'basketball' THEN 6
    WHEN 'athlete' THEN 100
    WHEN 'marathon' THEN 200
    WHEN 'cycling' THEN 100
    ELSE NULL
  END;

  IF cap IS NOT NULL THEN
    SELECT count(*) INTO used FROM public.registrations WHERE category = NEW.category;
    IF used >= cap THEN
      RAISE EXCEPTION 'Registration for % is full (limit % reached).', NEW.category, cap;
    END IF;
  END IF;

  RETURN NEW;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.enforce_registration_capacity() FROM anon, authenticated, public;

CREATE TRIGGER registrations_capacity
BEFORE INSERT ON public.registrations
FOR EACH ROW EXECUTE FUNCTION public.enforce_registration_capacity();