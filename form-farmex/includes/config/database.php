<?php

// Conexion a la base de datos MySQL
function conectar_db() {
    $db = mysqli_connect('localhost', 'root', 'root', 'farmex');

    if(!$db) {
        echo "Error en la conexion";
        exit;
    }

    return $db;
}

