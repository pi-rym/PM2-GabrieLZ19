class peliculas {
  constructor(title, year, director, duration, genre, rate, poster) {
    this.title = title;
    this.year = year;
    this.director = director;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}

class repositorio {
  constructor() {
    this.pelis = [];
  }
  // crearPeliculas(datos) {
  //   datos.forEach((item) => {
  //     const pelicula = new peliculas(
  //       item.title,
  //       item.year,
  //       item.director,
  //       item.duration,
  //       item.genre,
  //       item.rate,
  //       item.poster
  //     );
  //     this.pelis.push(pelicula);
  //   });
  // }

  crearPeliculas(datos) {
    datos.forEach((item) => {
      //recorre los datos de la api
      const { title, year, director, duration, genre, rate, poster } = item; //destructuring
      const pelicula = new peliculas(
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster
      );
      this.pelis.push(pelicula);
    });
  }

  obtenerPeliculas() {
    return this.pelis;
  }
}

const repositorioPelis = new repositorio();

$.get("https://students-api.2.us-1.fl0.io/movies", (datos) => {
  repositorioPelis.crearPeliculas(datos);
  console.log(repositorioPelis.obtenerPeliculas());
  mostrarElementos();
});

function crearElementos(datos) {
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
  director1.className = "contenido";

  const duracion = document.createElement("p");
  duracion.textContent = duration;
  duracion.className = "contenido";

  const año = document.createElement("p");
  año.textContent = year;
  año.className = "contenido";

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

  return contenedor;
}

function mostrarElementos() {
  const contenedorHTML = document.querySelector("#peliculas");
  contenedorHTML.innerHTML = "";

  const peliculas = repositorioPelis.obtenerPeliculas();

  const elementos = peliculas.map(crearElementos);

  elementos.forEach((peli) => contenedorHTML.appendChild(peli));
}
