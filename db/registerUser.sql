INSERT INTO sim2_users
( username, password )
VALUES ( $1, $2 )
RETURNING *;