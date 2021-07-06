<?php
    session_start();
    include('connection.php');
        $user=$_POST['user'];
        $pass=$_POST['pass'];
        if(!$consult=mysqli_query($connect,"call spStartSession('$user','$pass');"))
            echo("consult error");
        else
        {
            if(mysqli_num_rows($consult)>0)
            {
                $row= mysqli_fetch_array($consult);
                if($pass==$row['Pass'])
                {
                    $_SESSION['id']=$row['ID'];
                    $_SESSION['user']=$row['Usuario'];
                    $_SESSION['typeUser']=$row['Tipo_Usuario'];
                    $_SESSION['area']=$row['Areas'];
                    echo($row['Tipo_Usuario']);
                }
                else{
                    echo("usuario o contraseñas incorrectas");
                }
            }
            else{
                echo("usuario o contraseñas incorrectas");
            }
        }
    
?>