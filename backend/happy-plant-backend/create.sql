create table bars (id uuid not null, description varchar(255), name varchar(255), primary key (id));
create table foos (id uuid not null, name varchar(255), primary key (id));
create table foos_bars (bar_id uuid not null, foo_id uuid not null);
alter table if exists foos_bars add constraint FKj5h5xveakymds97ridwir261k foreign key (bar_id) references bars;
alter table if exists foos_bars add constraint FKrbt0jnhonpurv1qbfa6il0eow foreign key (foo_id) references foos;
