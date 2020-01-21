-- To drap database if exist then name of file at the end we use semicolons 
DROP DATABASE IF EXISTS yelps;
-- create database then name of the file snake case if multiple words like grovers_groomer
CREATE DATABASE yelps;
-- we need to connect to postrges \ connect database name
\c yelps;
-- drop a table if exites users table
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS pets;

-- create a table
CREATE TABLE users(
    -- create table by giving id
    id SERIAL PRIMARY KEY,
    -- the user have to put a name so we have write ==> not null // unique like social study and email
    name TEXT NOT NULL UNIQUE,
    age INTEGER
);
CREATE TABLE pets(
    id SERIAL PRIMARY KEY,
    name TEXT ,
    species Text,
    age INTEGER,
    owner_id INT REFERENCES users(id) ON DELETE SET NULL
    -- pet has one ownwer and we have to link it with users id
    -- if there is an other table use id we cannot deleted so we have to decide about the parent id
    -- CASCADE MEANS IF WE DELETE THE OWNER ID WE SHOULD DELETE THE USER
    -- ==>owner_id INT REFERENCES users(id) ON DELETE CASCADE
    -- DELETE SET NULL IF WE DELETE THE USER ID WE SHOULD SET THE OWNER ID TO NULL
    -- FOR EXAMPLE IF THE OWNER DIED WE SET THE OWNER OF THE PET TO 0 THAT IS MEAN THE PET DOES NOT HAVE AN OWNER
);
INSERT INTO users (name, age)
  VALUES('corskey', 100),
        ('JON', 26);
      INSERT INTO pets (name, species,age ,owner_id)
      VALUES('Noboro', 'Cat',14 ,1);
-- iF parent gets deleted cascade will delete children
-- set to null will set the children id to null
-- d=seed data is to add other data present into the database
--good to add into it's own file
