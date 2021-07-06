<?php
    include('connection.php');
    $email=$_POST['email'];
    $question=$_POST['question'];
    $resp=$_POST['resp'];
    if(!$consult=mysqli_query($connect,"CALL spRestorePass('$email','$question','$resp');"))
            echo($connect->error);
    else
    {
        if(mysqli_num_rows($consult)>0)
        {
             echo "haydatos";
        }
        else{
            echo "nohaydatos";
        }
    }
?>

