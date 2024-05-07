const selectName = document.querySelector('#name');
const selectRut = document.querySelector('#rut');
const selectEmail = document.querySelector('#email');
const selectMedicamentos = document.querySelector('#medicamentos');

const validarRut = (rut) => {
    // Expresión regular para validar el formato del RUT chileno
    const regex = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;

    // Verificar si el formato del RUT es válido
    if (!regex.test(rut)) {
        return false;
    }

    // Separar el número del dígito verificador
    const partes = rut.split('-');
    const cuerpo = partes[0].replace(/\./g, '');
    const dv = partes[1];

    // Calcular el dígito verificador esperado
    let suma = 0;
    let multiplo = 2;
    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += parseInt(cuerpo.charAt(i)) * multiplo;
        if (multiplo < 7) {
            multiplo++;
        } else {
            multiplo = 2;
        }
    }
    const dvEsperado = 11 - (suma % 11);
    const dvCalculado = (dvEsperado === 11) ? '0' : (dvEsperado === 10) ? 'K' : dvEsperado.toString();

    // Comparar el dígito verificador calculado con el proporcionado
    return dv.toUpperCase() === dvCalculado;
}

const validarCorreo = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function displayAlert() {
    const nombre = selectName.value;
    const rut = selectRut.value;
    const email = selectEmail.value;
    const medicamentos = Array.from(selectMedicamentos.selectedOptions).map(option => option.text);
    
    if (nombre.length === 0 || rut.length === 0 || email.length === 0) {
        alert('Por favor, rellene todos los campos');
    } else if (!validarRut(rut)) {
        alert('El Rut ingresado no es válido, intentelo nuevamente (XX.XXX.XXX-X)');
        return
    }
    else if (!validarCorreo(email)) {
        alert('El correo ingresado no es válido, intentelo nuevamente');
        return
    } else {
        const mensaje = `Nombre: ${nombre}\nRUT: ${rut}\nEmail: ${email}\nMedicamentos: ${medicamentos.join(', ')}`;

        alert(mensaje);
    }
}