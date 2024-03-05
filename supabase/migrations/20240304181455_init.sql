/* Drop existing tables */
DROP TABLE IF EXISTS user_profiles;

/* Create tables */
CREATE TABLE user_profile (
    ID uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
    user_id uuid references auth.users (id) not null,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    created_at timestamp with time zone default now() not null
);

/* Enable RLS */
alter table user_profiles enable row level security;
