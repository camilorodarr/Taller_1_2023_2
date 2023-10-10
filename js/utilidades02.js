
var estudiantesRegistrados = [];

function agregarEstudiante() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var identificacion = document.getElementById("identificacion").value;

    var nuevoEstudiante = {
        nombre: nombre,
        edad: edad,
        identificacion: identificacion
    };

    estudiantesRegistrados.push(nuevoEstudiante);
    alert("Estudiante agregado correctamente");
}

function buscarEstudiante() {
    var buscarIdentificacion = document.getElementById("buscarIdentificacion").value;
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    var estudianteEncontrado = estudiantesRegistrados.find(function(estudiante) {
        return estudiante.identificacion == buscarIdentificacion;
    });

    if (estudianteEncontrado) {
        var resultadoTexto = "Nombre: " + estudianteEncontrado.nombre + ", Edad: " + estudianteEncontrado.edad + ", Número de Identificación: " + estudianteEncontrado.identificacion;
        resultadoDiv.innerHTML = resultadoTexto;
    } else {
        resultadoDiv.innerHTML = "Estudiante no encontrado";
    }
}
