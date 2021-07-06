<?php
    include('connection.php');
    $name=$_POST['name'];
    $lnf=$_POST['lnf'];
    $lnm=$_POST['lnm'];
    $gender=$_POST['gender'];
    $phone=$_POST['phone'];
    $email=$_POST['email'];
    $pass=$_POST['pass'];
    $question=$_POST['question'];
    $resp=$_POST['resp'];
    $type="Cliente";
    $consult=mysqli_query($connect,"call spClient('insert',NULL,'$name','$lnf','$lnm','$gender','$phone','$email');");
    $consult2=mysqli_query($connect,"call spUser('insertWhithClient',NULL,'$email','$pass','$type','$question','$resp',0);");
    if(!$consult || !$consult2)
    {
        echo "don't save data";
    }
    else{
        echo "save";
    }
    
?>