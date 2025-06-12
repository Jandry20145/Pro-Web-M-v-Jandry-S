function mostrarPresentacion() {
    const nombre = document.getElementById("Nombre").value;
    const apellido = document.getElementById("Apellido").value;
    const edad = document.getElementById("Edad").value;
    const artista = document.getElementById("Artista").value;
    const comida = document.getElementById("Comida").value;
    const cancion = document.getElementById("Cancion").value;

    let generacion;

    if (edad >= 60) {
        generacion = "Baby Boomer";
    } else if (edad >= 48) {
        generacion = "Generacion X";
    } else if (edad >= 28) {
        generacion = "Millennial";
    } else if (edad >= 12) {
        generacion = "Generacion Z";
    } else {
        generacion = "Alpha";
    }

    const resultado = `
        <strong> Hola soy ${nombre} y mi apellido es ${apellido} </strong>
        <br>
        <strong> Tengo ${edad} años y pertenezco a la ${generacion} </strong>
        <br><br>
        Mi artista favorito es: <em>${artista}</em><br>
        Mi comida favorita es: <em>${comida}</em><br>
        Mi canción favorita es: <em>${cancion}</em><br>
    `;

    document.getElementById("resultado").innerHTML = resultado;

}