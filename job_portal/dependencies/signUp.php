<?php
include 'connection.php';


    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    # checking if the user already exists or not:

    $checkUserQuery = "SELECT * FROM users WHERE email='$email'";
    $result = mysqli_query($conn, $checkUserQuery);

    if (mysqli_num_rows($result) > 0) {
        echo "User already exists!";
    } else {
        
        # insert data if user isn't exists:

        $insertQuery = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";
        if (mysqli_query($conn, $insertQuery)) {
            echo "Sign up successful!";
        } else {
            echo "Error: " . $insertQuery . "<br>" . mysqli_error($conn);
        }
    }

mysqli_close($conn);
?>
