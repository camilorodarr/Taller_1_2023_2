function calcularEstadisticas() {
    var inputCalificaciones = document.getElementById("calificaciones").value;

    var calificaciones = inputCalificaciones.split(",").map(function (item) {
        return parseInt(item.trim());
    });

    var promedio = calcularPromedio(calificaciones);
    var maximaCalificacion = Math.max(...calificaciones);
    var minimaCalificacion = Math.min(...calificaciones);
    var resultadoDiv = document.getElementById("resultado");

    resultadoDiv.innerHTML = `
        <p>Promedio: ${promedio.toFixed(1)}</p>
        <p>Calificación más alta: ${maximaCalificacion}</p>
        <p>Calificación más baja: ${minimaCalificacion}</p>
    `;
}
function calcularPromedio(calificaciones) {
    var sum = calificaciones.reduce(function (acc, val) {
        return acc + val;
    }, 0);
    return sum / calificaciones.length;
}
