function validarEmail(email) {
  const regex = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
  return regex.test(email);
}

// Ejemplo de uso
const correoElectronico = "ejemplo@example.com";
const esValido = validarEmail(correoElectronico);

if (esValido) {
  console.log("El correo electrónico es válido");
} else {
  console.log("El correo electrónico no es válido");
}

function validarNumero(event) {
  var charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    event.preventDefault();
    return false;
  }
  return true;
}