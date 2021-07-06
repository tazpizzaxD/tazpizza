<?php
    include('connection.php');
    if(!$consult= mysqli_query($connect,"SELECT * FROM vquestion;"))
    {
        echo("error de la consulta");
    }
    $data=array();
    while($row=mysqli_fetch_array($consult))
    {
        $id=$row['ID'];
        $name=$row['Pregunta'];
        $data[]=array('id'=>$id, 'pregunta'=>$name);
    }
    $jsonData=json_encode($data);
    echo $jsonData;
?>