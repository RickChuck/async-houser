DELETE FROM houser
WHERE id = $1;

SELECT * FROM houser
WHERE user_id = $2;