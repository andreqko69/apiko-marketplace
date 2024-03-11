/* Create tables start */

CREATE TABLE IF NOT EXISTS user_profile (
    id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
    user_id uuid REFERENCES auth.users (id) ON DELETE CASCADE NOT NULL UNIQUE,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

/* Create tables end */

/* Enable RLS start */

alter table user_profile enable row level security;

/* Enable RLS end */

/* Functions start */

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.user_profile (user_id, first_name, last_name)
    values (
        NEW.id,
        NEW.raw_user_meta_data->>'first_name',
        NEW.raw_user_meta_data->>'last_name'
    );

    -- Remove useless data since we have it in the user_profile table
    UPDATE auth.users
    SET raw_user_meta_data = NULL
    WHERE id = NEW.id;

    return NEW;
END
$$ LANGUAGE plpgsql SECURITY DEFINER;

/* Functions end */

/* Triggers start */

/* Triggers user_profile start */

CREATE TRIGGER on_user_profile_updated
AFTER UPDATE ON user_profile
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

/* Triggers user_profile end */

/* Triggers users start */

CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION handle_new_user();

/* Triggers users end */

/* Triggers end */

/* Policies start */

/* Policies user_profile start */

CREATE POLICY "Profiles are viewable by everyone." ON user_profile
    FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile." ON user_profile
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own profile." ON user_profile
    FOR UPDATE USING (auth.uid() = id);

/* Policies user_profile end */

/* Policies end */
