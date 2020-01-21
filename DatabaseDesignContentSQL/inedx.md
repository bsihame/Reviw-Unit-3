 To drap database if exist then name of file at the end we use semicolons 
==>DROP DATABASE IF EXISTES yelps;
create database then name of the file snake case if multiple words like grovers_groomer
==>CREATE DATABASE yelps;
 we need to connect to postgre \ connect database name
==>\c yelps;
we should install postgreSQL
we should install command line. you could check by writing psql in the terminal and should show the version you have==>psql (12.1) Type "help" for help.
*if not you should install command line check the set up in github*
to quite in the terminal you should write \q ==> to exit
============================================================
===> to check on the terminal we write ====> psql -f nameOfTheFile.sql
===> when you enter all database you go to the terminal to check do the following:
psql===> enter
\c name of the database ==> enter
==>\c yelps 
======> then you should see that you are connected to see all the table you should write 
SELECT *  FROM users // the name of the table you want to see

