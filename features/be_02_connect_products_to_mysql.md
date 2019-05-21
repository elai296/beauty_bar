# create connection file for mysql

1. Confirm the existence of the credential file TEMPLATE, db_connection.php.config
1. copy db_connection.php.config to db_connection.php
1. in db_connection.php, make a connection to your mysql database with your local host, user, password, database, and port.  Assign the resulting connection to the variable $conn
1. verify the .gitignore file
1. in the .gitignore file, verify that db_connection.php has been ignored.
1. In db_connection.php, change all the dummy information to real information for your database. 
1. in your products.php file, require once the db_connection.php file
1. test your $conn variable.  If it is falsey, then throw an exception, and send it your mysqli_connect_error return value.
