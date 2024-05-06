function validarContraseñas() {
    var contraseña = document.getElementById("contraseña").value;
    var confirmarContraseña = document.getElementById("confirmar-contraseña").value;

    if (contraseña !== confirmarContraseña) {
        document.getElementById("mensaje-contraseña").innerText = "Las contraseñas no coinciden";
        return false;
    } else {
        document.getElementById("mensaje-contraseña").innerText = "";
        return true;
    }
}
