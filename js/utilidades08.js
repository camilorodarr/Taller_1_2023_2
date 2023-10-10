function generarContrasena() {
    const longitud = document.getElementById("longitud").value;
    const incluirMayusculas = document.getElementById("mayusculas").checked;
    const incluirNumeros = document.getElementById("numeros").checked;
    const incluirEspeciales = document.getElementById("especiales").checked;

    const caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const caracteresMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const caracteresNumeros = "0123456789";
    const caracteresEspeciales = "!@#$%^&*()_+[]{}|;:,.<>?";

    var caracteres = caracteresMinusculas;

    if (incluirMayusculas) caracteres += caracteresMayusculas;
    if (incluirNumeros) caracteres += caracteresNumeros;
    if (incluirEspeciales) caracteres += caracteresEspeciales;

    var contrasena = "";

    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random()*caracteres.length);
        contrasena += caracteres.charAt(indiceAleatorio);
    }

    document.getElementById("contrasena").value = contrasena;
}
