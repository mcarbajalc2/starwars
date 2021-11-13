'use strict';
const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid')
/*
{
    id_pelicula: string,
    titulo: string,
    id_episodio: number,
    rastreo_apertura: string,
    director: string,
    productor: string,
    fecha_lanzamiento: date,
    razas: array,
    naves: array,
    personajes: array,
    planetas: array,
    fecha_creacion: date,
    vehiculos: array
}
*/

module.exports.agregarPelicula = (pelicula) => {
    const params = {
        TableName: process.env.TABLE_NAME,
        Item: { id_pelicula: uuid.v1(), ...pelicula }
    };

    return dynamo.put(params).promise();
}

module.exports.listarPeliculas = () => {
    const params = {
        TableName: process.env.TABLE_NAME
    }
    return dynamo.scan(params).promise();
}