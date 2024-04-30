create table assignments (last_done timestamp(6), id uuid not null, plant_id uuid, primary key (id));
create table needs (lighting_type tinyint check (lighting_type between 0 and 3), id uuid not null, primary key (id));
create table needs_intervals (intervals integer, intervals_key tinyint not null check (intervals_key between 0 and 4), needs_id uuid not null, primary key (intervals_key, needs_id));
create table pixels (is_window boolean, lighting_type tinyint check (lighting_type between 0 and 3), x integer, y integer, id uuid not null, room_id uuid, primary key (id));
create table plants (id uuid not null, needs_id uuid unique, pixel_id uuid, species_id uuid, user_id uuid, name varchar(255), notes varchar(255), picture_path varchar(255), primary key (id));
create table plants_assignments (assignments_key tinyint not null check (assignments_key between 0 and 4), assignments_id uuid not null unique, plant_id uuid not null, primary key (assignments_key, plant_id));
create table rooms (id uuid not null, user_id uuid, name varchar(255), primary key (id));
create table species (id uuid not null, needs_id uuid unique, description varchar(255), family varchar(255), latin_name varchar(255), name varchar(255), picture_path varchar(255), primary key (id));
CREATE TABLE IF NOT EXISTS users (
    id UUID NOT NULL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email_verified BOOLEAN NOT NULL DEFAULT FALSE,
    email_verification_token VARCHAR(255),
    email_verification_expires BIGINT,
    reset_password_token VARCHAR(255),
    reset_password_expires BIGINT,
    reset_password_code INTEGER,
    receive_push_notifications BOOLEAN NOT NULL DEFAULT false,
    push_notifications_time TIMESTAMP
);
alter table if exists assignments add constraint FK1q7ojkrv5e6xw973m2esra3iv foreign key (plant_id) references plants;
alter table if exists needs_intervals add constraint FKk69ltt7oxjre6y3tmtk7shojy foreign key (needs_id) references needs;
alter table if exists pixels add constraint FK3hh2wkwp12ikq9b5fihvq0dpv foreign key (room_id) references rooms;
alter table if exists plants add constraint FKkod65o6r4otr4uxb10k80pa03 foreign key (needs_id) references needs;
alter table if exists plants add constraint FKpfemijis6icre1vff080ov2mb foreign key (pixel_id) references pixels;
alter table if exists plants add constraint FK3o3bo53lvmnms6v5l84nnkk7q foreign key (species_id) references species;
alter table if exists plants add constraint FKobr4pknd4t8mj5brx0du97c3j foreign key (user_id) references users;
alter table if exists plants_assignments add constraint FK3fcqe0djiortr5ujha1d6jfa8 foreign key (assignments_id) references assignments;
alter table if exists plants_assignments add constraint FKoy1le8qm8h13krwr6wt2kd5r4 foreign key (plant_id) references plants;
alter table if exists rooms add constraint FKa84ab0lpjkgd9beja545d9ysd foreign key (user_id) references users;
alter table if exists species add constraint FKgwvq1pv2rr0iwh6m9twt5n00c foreign key (needs_id) references needs;