const contenedorHTML = document.querySelector("#peliculas");
contenedorHTML.innerHTML = "";

function crearCards(datos) {
  const { title, year, director, duration, genre, rate, poster } = datos;

  const contenedor = document.createElement("div");
  contenedor.className = "contenedorPelis";

  const titulo = document.createElement("a");
  titulo.textContent = title;
  //   titulo.href = "google.com";
  titulo.className = "titulo";

  const imagen = document.createElement("img");
  imagen.src = poster;
  imagen.className = "poster";

  const genero = document.createElement("p");
  genero.textContent = genre;
  genero.className = "genero";

  const director1 = document.createElement("p");
  director1.textContent = director;
  director1.classList.add("contenido");

  const duracion = document.createElement("p");
  duracion.textContent = duration;
  duracion.classList.add("contenido");

  const año = document.createElement("p");
  año.textContent = year;
  año.classList.add("contenido");

  const puntuacion = document.createElement("p");
  puntuacion.textContent = rate;
  puntuacion.className = "puntuacion";

  contenedor.appendChild(titulo);
  contenedor.appendChild(imagen);
  contenedor.appendChild(genero);
  contenedor.appendChild(director1);
  contenedor.appendChild(duracion);
  contenedor.appendChild(año);
  contenedor.appendChild(puntuacion);

  contenedorHTML.appendChild(contenedor);
}

module.exports = crearCards;
