CREATE TABLE avaliacao(
	id INT IDENTITY(1,1) primary key,
	hora VARCHAR(15),
	motivo_reserva VARCHAR(50),
	data_agendamento VARCHAR(50), 
	nome_espaco VARCHAR(40)


);

INSERT INTO avaliacao VALUES

('15:00', 'motivo particular','15/04/2024', 'biblioteca');

select * from avaliacao

