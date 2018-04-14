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
( name )
VALUES
('DC'),
('Marvel');

INSERT INTO persons
( name )
VALUES
('Bruce Wayne'),
('Bruce Banner'),
('Clark Kent'),
('Tony Stark'),
('Peter Parker'),
('Wade Wilson'),
('Hal Jordan'),
('Charles Xavier'),
('Natasha Romanova');

INSERT INTO heroes 
( name, person_id, universe_id )
VALUES
('Batman', 1, 1),
('The Incredible Hulk', 2, 2),
('Superman', 3, 1),
('Iron Man', 4, 2),
('Spiderman', 5, 2),
('Deadpool', 6, 2),
('Green Lantern', 7, 1),
('Professor X', 8, 2)
('Black Widow', 9, 2);

INSERT INTO powers
( power, description )
VALUES
('Gliding', 'Not flying or levitation, but is the ability to ride air currents anywhere'),
('Marksmanship','Super accuracy'),
('Longevity', 'Slowing down or even stopping the effects of aging'),
('Fire Resistance', 'Not being injured from some or all types of fire'),
('Hypokinesis', 'Mentally send an individual into a trance-like state, and/or mentally manipulate an entranced individual via hypnotic suggestion'),
('Heat Vision', 'Generate and project varying waves of energy from a persons eyes'),
('X-Ray Vision', 'See through layers of objects at the discretion of the holder of this superpower');

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

