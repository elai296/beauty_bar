# connect to products table and fetch data

### task list 1 - modify product list

1. we're going to add multiple images to our products
1. find an additional url of an image for each of your products
1. modify your dummy data for **product-details**
    1. turn images into an array of images.
        - put your original image url into the array first
        - get additional images from google
        - put images in server/public/images for your front end
    1. Add the additional image url to each 
1. modify your dbdesigner schema
    1. add a new table, images
    1. put appropriate fields for images
        1. an id for each image, remember, this is usually auto incrementing
        1. the url of the image
        1. the id of the product
            - this will be the id of the product that this image belongs to
1. modify your database
    1. add a new table for your images
    1. from your schema, add fields to your table
    1. from your dummy data, add the data to your table
        - remember, your id is auto incrementing, so you don't need to supply a vaue
1. eventually we'll need to remove image from the product table, but for now we can keep it
1. modify your product list endpoint (list, not details, ie the part that happens with no id)
1. you'll need to do a sub-select (a [MySQL Correlated Subquery](https://www.w3resource.com/mysql/subqueries/index.php#SM))
    1. subqueries take many forms, this is one of them:
    ```SELECT <fields from table 1>
        (SELECT <field from table 2> FROM <table 2> WHERE <key from table 2> = <key from table 1> LIMIT 1) AS <field name to use for query, I used image>
        FROM <table 2>
    ```
    example: 
    ![images subquery result](assets/be06_1.png)
    (there are many forms of subqueries, this is just 1)
1. the product list should remain the same at this point as it was previously.
1. your result should look something like this
    ![images subquery result](assets/be06_4.png)

### task list 2 - modify product details

1. in your product list endpoint: 
1. go to the section that responds to the presence of an ID
1. rewrite your query to include a [join](https://www.w3resource.com/mysql/advance-query-in-mysql/mysql-natural-join.php)
    1. "join" is a synonym for "natural join"
    1. it takes a form similar to this
        ```
        SELECT < fields from table 1>
            <fields from table 2>
            FROM <table 1>
            JOIN <table 2>
                ON <key from table 1> = <key from table 2>
            <WHERE clause>
        ```
    example: 
    ![images subquery result](assets/be06_2.png)
1. notice how the main information is repeated because there are many images per 1 entry in product


### task list 3 - modify query

1. because we only want 1 image, we're going to use a GROUP clause to group up the images for our product
1. research [GROUP BY](https://dev.mysql.com/doc/refman/8.0/en/group-by-handling.html) in mysql.  I recommend only really looking at the examples.
1. then modify your query to use group by.
    ```
    SELECT < fields from table 1>
        GROUP_CONCAT(<field from table 2>) AS images
        FROM <table 1>
        JOIN <table 2>
            ON <key from table 1> = <key from table 2>
        <WHERE clause>
        GROUP BY <field to group by>
    ```
1. in more complex situations, this sort of thing would need to be handled in PHP to parse the data, but for this we can use [GROUP_CONCAT](https://www.w3resource.com/mysql/aggregate-functions-and-grouping/aggregate-functions-and-grouping-group_concat.php).
1. your data will look something now like this:
    ![images subquery result](assets/be06_5.png)
1. notice that images is a comma separated list of image urls.  We need it to be an array, otherwise your output will look like this: 
1. in your while loop where you mysqli_fetch_assoc your data (for your product details):
1. transform images into an array
    1. read about [php explode](https://www.php.net/manual/en/function.explode.php)
    1. take the current value of images in $row and replace it with the exploded value
    ```
    $row['images'] = ?
    ```
1. your final output should look like this in postman
    ![images subquery result](assets/be06_6.png)
1. send a pull request with your screen shots correct once you have it correct
    