CREATE DATABASE xdelva;

use xdelva;

CREATE TABLE users(
    id INT AUTO_INCREMENT,
    user_name VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAR(64) NOT NULL,
    email VARCHAR(20) UNIQUE NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

