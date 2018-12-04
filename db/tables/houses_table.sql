CREATE TABLE houses(
    house_id SERIAL PRIMARY KEY,
    house_name VARCHAR(30),
    house_address VARCHAR(100),
    city VARCHAR(100),
    house_state VARCHAR(2),
    zip_code INT,
    img TEXT,
    mortgage DECIMAL,
    rent DECIMAL
)

INSERT INTO houses(house_name, house_address, city, house_state, zip_code, img, mortgage, rent)
VALUES('Big test house', '1759 S. Range rd.', 'Test Town', 'UT', 80001,' ', 1500, 2100)