delete from persons;
delete from powers;
delete from heroes;
delete from universe;
delete from heroes_powers;

select * from heroes;
select * from persons;
select * from universe;


CREATE TABLE IF NOT EXISTS persons (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS universe (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS heroes (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  person_id INT REFERENCES persons(id) ON UPDATE CASCADE ON DELETE CASCADE,
  universe_id INT REFERENCES universe(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS powers (
  id SERIAL PRIMARY KEY,
  power TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS heroes_powers (
    id SERIAL PRIMARY KEY,
    hero_id INT REFERENCES heroes(id) ON UPDATE CASCADE ON DELETE CASCADE,
    power_id INT REFERENCES powers(id) ON UPDATE CASCADE
);


INSERT INTO universe
( id, name )
VALUES
(1, 'DC'),
(2, 'Marvel');

INSERT INTO persons
( id, name )
VALUES
(1, 'Bruce Wayne'),
(2, 'Bruce Banner'),
(3, 'Clark Kent'),
(4, 'Tony Stark'),
(5, 'Peter Parker'),
(6, 'Wade Wilson'),
(7, 'Hal Jordan'),
(8, 'Charles Xavier'),
(9, 'Natasha Romanova');

select * from persons;

INSERT INTO heroes 
( id, name, person_id, universe_id )
VALUES
(1, 'Batman', 1, 1),
(2, 'The Incredible Hulk', 2, 2),
(3, 'Superman', 3, 1),
(4, 'Iron Man', 4, 2),
(5, 'Spiderman', 5, 2),
(6, 'Deadpool', 6, 2),
(7, 'Green Lantern', 7, 1),
(8, 'Professor X', 8, 2),
(9, 'Black Widow', 9, 2);

INSERT INTO powers
( id, power, description )
VALUES
(1, 'Gliding', 'Not flying or levitation, but is the ability to ride air currents anywhere'),
(2, 'Marksmanship','Super accuracy'),
(3, 'Longevity', 'Slowing down or even stopping the effects of aging'),
(4, 'Fire Resistance', 'Not being injured from some or all types of fire'),
(5, 'Hypokinesis', 'Mentally send an individual into a trance-like state, and/or mentally manipulate an entranced individual via hypnotic suggestion'),
(6, 'Heat Vision', 'Generate and project varying waves of energy from a persons eyes'),
(7, 'X-Ray Vision', 'See through layers of objects at the discretion of the holder of this superpower');

INSERT INTO heroes_powers
( hero_id, power_id )
VALUES
(1, 1),
(1, 2),
(2, 4),
(3, 5),
(3, 6),
(3, 7),
(4, 2),
(4, 4),
(9, 3),
(9, 2);

