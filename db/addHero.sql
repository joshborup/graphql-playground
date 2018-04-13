INSERT INTO heroes
( name, person_id, universe_id )
VALUES
( $1, $2, $3 )
RETURNING *;