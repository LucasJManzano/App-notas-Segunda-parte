const path = require('path');
const fs = require('fs');
const process = require('process');

//Uniendo app.js con el JSON
//const rutaJson = path.dirname('app-tareas/data/tareas.json')
const rutaJson = path.resolve(__dirname, 'data/tareas.json');

//Guardo en la variable tareas lo que hay en tareas.json
let tareas = fs.readFileSync(rutaJson, { encoding: 'UTF-8' });

//El método JSON.parse() analiza una cadena de texto como JSON, transformando opcionalmente el valor producido por el análisis.
let tareasJson = JSON.parse(tareas);


//accion listar , process.argv

//const listar = process.argv[2];


function lisstar(){
        console.log('');
        console.log('Listado de tareas');
        console.log('-----------------');
        tareasJson.forEach ((tareas, i ) => {
            console.log(`${i + 1}. ${tareas.titulo} - ${tareas.estado}`) });
        console.log('-----------------');
        console.log('');
        }

switch(process.argv[2]){
    case 'listar': lisstar();
        break;
    case undefined: 
        console.log('');
        console.log('"Atención" - Tienes que pasar una acción');
        console.log('');
    break;
   default: 
        console.log('');
        console.log ('No entiendo qué quieres hacer \nEjecuta por favor la acción "listar"');
        console.log('');
    break;
};