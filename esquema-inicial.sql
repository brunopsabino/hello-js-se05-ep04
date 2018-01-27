create table contato(
  idcontato integer not null primary key autoincrement,
  nomecontato varchar(255) not null,
  datacriacaocontato timestamp not null default current_timestamp
);