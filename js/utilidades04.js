function generarTabla() {
    const numeroInput = document.getElementById("numero");
    const filasInput = document.getElementById("filas");
    const resultadoDiv = document.getElementById("tablaResultado");
    resultadoDiv.innerHTML = "";
    const numero = parseInt(numeroInput.value);
    const filas = parseInt(filasInput.value);
    const tabla = document.createElement("table");
    tabla.classList.add("tabla-multiplicar");
    const principal = tabla.createTHead();
    const filaPrincipal = principal.insertRow();
    const celdaPrincipal = document.createElement("th");
    celdaPrincipal.textContent = "Tabla de Multiplicar de " + numero;
    celdaPrincipal.colSpan = 2;
    filaPrincipal.appendChild(celdaPrincipal);
    const cuerpo = tabla.createTBody();
    for (let i = 1; i <= filas; i++) {
        const fila = cuerpo.insertRow();
        const celda1 = fila.insertCell(0);
        const celda2 = fila.insertCell(1);
        celda1.appendChild(document.createTextNode(`${numero} x ${i}`));
        celda2.textContent = numero * i;
    }
    resultadoDiv.appendChild(tabla);
}
