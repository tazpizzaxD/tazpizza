<?php
    session_start();
    if(!isset($_SESSION['typeUser']))
    {
        echo "false";
    }
    else{
        echo $_SESSION['area'];
    }
?>