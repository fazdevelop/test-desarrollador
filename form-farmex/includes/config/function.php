<?php
require 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre_usuario = $_POST['user'];
    $password = $_POST['password'];
    $fecha_nacimiento = $_POST['birth-date'];
    $id_perfil = 1;
    $activo = 1;

    // Validaciones
    if (strtotime($fecha_nacimiento) > strtotime('today') ) {
        echo "Por favor, seleccione la fecha correcta";
    } elseif ($nombre_usuario == $password) {
        echo "La password no puede ser similar al nombre de usuario";
    } else if (strlen($password) < 10) {
        echo "La password debe tener al menos 10 caracteres";
    } else {

    try {
        $db = conectar_db();

        // Consulta SQL para insertar nuevo user 
        $sql = "INSERT INTO USUARIO (nombre_usuario, password, fecha_nacimiento, fecha_creacion, id_perfil, activo) VALUES ('$nombre_usuario', '$password', '$fecha_nacimiento', NOW(), $id_perfil, $activo)";
    
        $query = mysqli_query($db, $sql);

        if($query) {
            echo "Usuario registrado !";
        } else {
            echo "Error al registrarse";
        }

    } catch (\Throwable $th) {
        echo "Error: " . $th->getMessage();
    }
}
}