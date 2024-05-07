import React, { useEffect, useState } from "react";

const App = () => {
  const [perfiles, setPerfiles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/function.php')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al obtener perfiles');
      }
      return response.json();
    })
    .then(data => {
      setPerfiles(data);
    })
    .catch(error => {
      console.error("Error al obtener perfiles: ", error);
    })
  }, []);

  return (
    <>
    <div className="container mt-5">

      <div className="row" id="formulario">
        <div className="col-12 title">
          <h1>Formulario</h1>
        </div>

        <div className="col-12 form">
          <div className="p-3">
              <form method="POST" action="http://localhost:3000/function.php">

                <div className="mb-3">
                  <label for="user" className="form-label">Ingrese nombre de usuario</label>
                  <input type="text" name="user" id="user" className="form-control" placeholder="nombre_usuario" required></input>
                </div>

                <div className="mb-3">
                  <label for="password" className="form-label">Ingrese una contraseña</label>
                  <input type="password" name="password" id="password" className="form-control" placeholder="******" required></input>
                </div>

                <div className="mb-3">
                  <label for="birth-date" className="form-label">Fecha de nacimiento</label>
                  <input type="date" name="birth-date" id="birth-date" min="1900-01-01" max="2024-05-07" className="form-control" required></input>
                </div>        

                <div className="col-3 mx-auto">
                  <input type="submit" className="btn btn-submit"/>
                </div>
              </form>
          </div>
        </div>
        
      </div>

    </div>
    </>
  );
};

export default App;
