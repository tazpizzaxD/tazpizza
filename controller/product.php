<?php
    include('connection.php');
    if(!$consult= mysqli_query($connect,"call spProduct('show',0,null,null,0,0,0,0,null)"))
    {
        echo("error de la consulta");
    }
    $data=array();

    while($row=mysqli_fetch_array($consult))
    {

       // var_dump($row);
        $id=$row['ID'];
        $name=$row['Pizza'];
        $size=$row['Tamaño'];
        $ingredients=$row['Ingredientes'];
        $category=$row['Categoria'];
        $description=$row['Descripcion'];
        $image=$row['txtImage'];

        $data[]=array('id'=>$id, 'pizza'=>$name, 'tamaño'=>$size,
         'ingredientes'=>$ingredients, 'categoria'=>$category,
          'descrpcion'=>$description, 'image'=>$image);
    }


   
    $jsonData=json_encode($data);


    
   echo $jsonData;

    
?>