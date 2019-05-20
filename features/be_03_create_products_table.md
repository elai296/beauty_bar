# create schema, table, and fill with data

1. Create a schema for the products table based on the dummy data in products_list.json
    - don't forget the id (and make it unsigned)
1. create a database, wickedSales, in your phpmyadmin
    - you will only need to do this once locally.
1. create a table, products,  based on your schema
1. fill your products table with dummy data based on your dummy data file
1. write a query to test select your dummy data.  If a query requires data for a WHERE clause, fill in a dummy value.
1. in your products.php file, put in your query and assign it to a variable, $query
1. make a variable, result.  Assign to it the result of a mysqli_query function call using your $conn variable and your $query
1. make a conditional that tests if result is not truthy.  If it is not, throw an exception and pass in a mysqli_error so you know what happened.
1. create an associative array variable, output
    - give it a key of success with value true
    - give it a key of data, with a value of an empty array
1. loop through the data coming from the result
    - push it into the $output['data'] key
1. json encode the output data
1. print the json data
1. use postman to hit your endpoint and test the data is coming out correctly