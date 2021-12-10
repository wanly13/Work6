DROP DATABASE IF EXISTS pokedex;
CREATE DATABASE pokedex;
USE pokedex;

CREATE TABLE pokemon(    
	id int NOT NULL AUTO_INCREMENT,
	name_p varchar(50) NOT NULL,
    nickname_p varchar(50) NOT NULL,
    image_p varchar(500),
	height_p float NOT NULL,
    weight_p float NOT NULL,
	category_p varchar(150) NOT NULL,
    abilities_p varchar(150) NOT NULL,
    type_p varchar(150) NOT NULL,
	PRIMARY KEY (id)
);

-- AÑADIR DATOS POKEMON
INSERT INTO pokemon( name_p, nickname_p,image_p, height_p, weight_p,category_p,abilities_p,type_p) 
VALUES ('Pikachu','Truenin', 'figures/0000000000001.jpeg' , 1.04 , 13.2 , 'Mouse', 'Estaatic' , 'Electric'),
('Ninetales ','Perrin',  'figures/0000000000002.jpeg', 3.07 , 43.9 , 'Fox', 'Flash Fire' , 'Fire'),
('Beedrill','Abejin',  'figures/0000000000003.jpeg', 3.03 , 65 , 'Poison Bee', 'Swarm' , 'Bug '),
('Zubat','Murcielagin',  'figures/0000000000004.jpeg', 2.07 , 16.5 , 'Bat', 'Inner Focus' , 'Poison'),
('Golbat','Murcielagon',  'figures/0000000000005.jpeg', 5.03 , 121-3 , 'Bat', 'Inner Focus' , 'Poison'),
('Gloom ','Vagito',  'figures/0000000000006.jpeg',2.07 , 19 , 'Weed', 'Chlorophyll' , 'Grass'),
('Oddish','CareCebolla',  'figures/0000000000007.jpeg', 1.08 , 119.9 , 'Weed', 'Chlorophyll' , 'Grass'),
('Arcanine ','PerroFuego',  'figures/0000000000008.jpeg', 1.04 , 13.2 , 'Legendary', 'Flash Fire' , 'Fire'),
('Rapidash ','Pegasu',  'figures/0000000000009.jpeg', 5.07 , 209.4 , 'Fire Horse', 'Run Away' , 'Fire'),
('Exeggcute ','Huebin',  'figures/0000000000010.jpeg', 1.04 , 5.5 , 'Mouse', 'Chlorophyll' , 'Psychic'),
('Marowak ','Jackie Chan',  'figures/0000000000011.jpeg', 3.02 , 99.2 , 'Bone Keeper', 'Rock Head' , 'Ground'),
('Hitmonlee','Bruce Lee',  'figures/0000000000012.jpeg', 4.11 , 109.8 , 'kicking', 'Limber' , 'Fighting'),
('Hitmonchan','Rocky',  'figures/0000000000013.jpeg', 4.07 , 110.7 , 'Punching', 'Keen Eye' , 'Fighting'),
('Articuno ','Chimuelo Blue',  'figures/0000000000014.jpeg', 5.07 , 122.1 , 'Freeze', 'Pressure' , 'Unknow');

/* 
--GET query:
    select name_p, nickname_p,image_p, height_p, weight_p,category_p,abilities_p,type_p
    from pokemon;
--POST query_
    /*
{
    "name_p": "Pikachu15",
    "nickname_p": "Truenin15",
    "image_p": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    "height_p": 1.04,
    "weight_p": 13.2,
    "category_p": "Mouse",
    "abilities_p": "Estaatic",
    "type_p": "Electric"
}
*/
 