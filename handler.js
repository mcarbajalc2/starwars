'use strict';

const db = require("./db")

module.exports.addFilm = async (event, context, callback) => {
  const pelicula = JSON.parse(event.body)

  try {
    await db.pelicula.agregarPelicula(pelicula)
    const response = {
      statusCode: 200,
      body: JSON.stringify({ complete: true })
    };
    callback(null, response);
  } catch (err) {
    callback(null, { statusCode: 500, error: JSON.stringify(err) });
  }
}

module.exports.listFilms = async (event, context, callback) => {
  const peliculas = await db.pelicula.listarPeliculas();
  const response = {
    statusCode: 200,
    body: JSON.stringify(peliculas)
  };
  callback(null, response)
}