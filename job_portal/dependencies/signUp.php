<?php
include 'connection.php';


    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    # password_hash for password encryption:
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
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
