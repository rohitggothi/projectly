<?php

$name = $_POST['name'];
$num = $_POST['num'];
$email = $_POST['email'];
$pro = $_POST['pro'];
$msg = $_POST['msg'];

// database connection here
$conn = new mysqli('localhost', 'root', '', 'projectly');
if ($conn->connect_error) {
    die('connection failed : ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into formdata(name,num,email,pro,msg)
    values(?,?,?,?,?)");
    $stmt->bind_param("sisss", $name, $num, $email, $pro, $msg);
    $stmt->execute();
    echo '<script>alert("Data Sent Successfully")</script>';
    echo file_get_contents("index.html");
    $stmt->close();
    $conn->close();
}
?>
