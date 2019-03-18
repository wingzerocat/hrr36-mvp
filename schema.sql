DROP DATABASE IF EXISTS pokemon;

CREATE DATABASE pokemon;

USE pokemon;

CREATE TABLE dex (
  id float NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  hp int,
  atk int,
  def int,
  spa int,
  spd int,
  spe int,
  total int,
  type_1 varchar(50),
  type_2 varchar(50),
  ability_1 varchar(50),
  ability_2 varchar(50),
  hidden varchar(50),
  legendary int,
  PRIMARY KEY (id)
);

LOAD DATA LOCAL INFILE 'server/pokedex.csv' INTO TABLE dex FIELDS TERMINATED BY ',' IGNORE 1 LINES; 

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
