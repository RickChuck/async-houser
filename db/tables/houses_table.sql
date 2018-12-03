CREATE TABLE houses(
    house_id SERIAL PRIMARY KEY,
    house_name TEXT,
    house_address TEXT,
    city TEXT,
    house_state TEXT,
    zip_code INT,
    mortgage INT,
    rent INT
)