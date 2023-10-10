var libros = [];

function agregarLibro() {
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const año = document.getElementById('año').value;

    if (titulo && autor && año) {
        const libro = {
            titulo: titulo,
            autor: autor,
            año: año
        };

        libros.push(libro);

        alert('Libro agregado con éxito');
    } else {
        alert('Por favor, complete todos los campos');
    }
}

function buscarLibro() {
    const tituloBuscar = document.getElementById('buscarTitulo').value;

    if (tituloBuscar) {
        const libroEncontrado = libros.find(libro => libro.titulo == tituloBuscar);

        if (libroEncontrado) {
            const resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = `
                <p>Título: ${libroEncontrado.titulo}</p>
                <p>Autor: ${libroEncontrado.autor}</p>
                <p>Año de Publicación: ${libroEncontrado.año}</p>
            `;
        } else {
            alert('Libro no encontrado');
        }
    } else {
        alert('Por favor, ingrese un título para buscar');
    }
}
