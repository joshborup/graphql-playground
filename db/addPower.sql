INSERT INTO powers
( power, description )
VALUES
( $1, $2 )
RETURNING *;