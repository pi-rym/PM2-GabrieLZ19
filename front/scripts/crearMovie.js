function validarMovies({
  title,
  year,
  director,
  duration,
  genre,
  rate,
  poster,
}) {
  if (
    !title ||
    !year ||
    !director ||
    !duration ||
    !genre[0] ||
    !rate ||
    !poster
  )
    return "Todos los campos son obligatorios";

  if (director.length < 5 || director.length > 50)
    return "Director debe contener entre 5 y 50 caracteres";
  if (isNaN(rate) || rate < 1 || rate > 10)
    return "La puntuacion debe ser un número entre 1 y 10";
}

const formulario = document.querySelector("#formularioPeliculas");
function limpiarCampos(event) {
  event.preventDefault();
  formulario.reset();
  alert("campos limpiados");
}

function crearMovie(event) {
  event.preventDefault();

  const title = document.querySelector("#inputTitle").value;
  const year = document.querySelector("#inputYear").value;
  const director = document.querySelector("#inputDirector").value;
  const duration = document.querySelector("#inputDuration").value;
  const genre = document.querySelector("#inputGenero").value.split(" ");
  //el split servira para separar si hay mas de un genero
  const rate = document.querySelector("#inputRate").value;
  const poster = document.querySelector("#inputPoster").value;

  const validacion = validarMovies({
    title,
    year,
    director,
    duration,
    genre,
    rate,
    poster,
  });

  if (validacion) return alert(validacion);

  return alert("Pelicula agregada");
}

module.exports = { limpiarCampos, crearMovie };
