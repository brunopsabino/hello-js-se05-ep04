create table partida(
	id_partida integer not null primary key autoincrement,
	data_partida timestamp not null,
	estadio varchar (255) not null,
	id_mandante integer not null,
	id_visitante integer not  null,
	publico_total integer not null,
	
	foreign key (id_mandante) references equipe(idequipe)
	foreign key (id_visitante) references equipe(idequipe)
	
);