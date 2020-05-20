<?php

include "config.php";

$return_arr = array();

$query = "SELECT * FROM users ORDER BY NAME";

$result = mysqli_query($con, $query);

while ($row = mysqli_fetch_array($result)) {

    $id       = $row['id'];
    $username = $row['username'];
    $name     = $row['name'];
    $email    = $row['email'];

    $return_arr[] = array("id" => $id,
        "username"                 => $username,
        "name"                     => $name,
        "email"                    => $email);
}

// Encoding array in JSON format
echo json_encode($return_arr);
