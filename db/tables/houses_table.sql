CREATE TABLE houser (
    id SERIAL PRIMARY KEY,
    property_name character varying(60),
    property_descrip text,
    address character varying(60),
    city character varying(60),
    my_state character varying(60),
    zip integer,
    img_url text,
    loan_amount money,
    monthly_mortgage money,
    desired_rent money,
    user_id integer REFERENCES sim2_users(id)
);

INSERT INTO houser(property_name, property_descrip, address, city, my_state, zip, img_url, loan_amount, monthly_mortgage, desired_rent)
VALUES('Big test house', 'WORDS WORDS WORDS WORDS WORDS WORDS WORDY WORD WORDS', '1759 S. Range rd.', 'City Town', 'UT', 50000, '', 2100, 2100, 2100)