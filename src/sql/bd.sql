DROP TABLE IF EXISTS roles CASCADE;
CREATE TABLE roles (
    role_id SERIAL PRIMARY KEY,
    role_name VARCHAR(50) UNIQUE NOT NULL
);


--TABLE USER
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    role_id INT NOT NULL,
    session_token VARCHAR(255) NULL,
    FOREIGN KEY (role_id) REFERENCES roles (role_id)
);


--INSERT
INSERT INTO roles (role_name) VALUES 
    ('user'),
    ('admin'),
    ('chef');

