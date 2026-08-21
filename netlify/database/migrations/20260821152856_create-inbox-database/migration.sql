-- Write your migration SQL here
--
-- Example:
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name varchar(40),
    contact varchar(40),
    comment varchar(500),
    created_at TIMESTAMP DEFAULT NOW()
    );
