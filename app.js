const path = require('path');
const fs = require('fs');
const process = require('process');

//Uniendo app.js con el JSON
//const rutaJson = path.dirname('app-tareas/data/tareas.json')
const rutaJson = path.resolve(__dirname, 'data/tareas.json');

//Guardo en la variable tareas lo que hay en tareas.json
//let tareas = fs.readFileSync(rutaJson, { encoding: 'UTF-8' });

//El método JSON.parse() analiza una cadena de texto como JSON, transformando opcionalmente el valor producido por el análisis.
//let tareasJson = JSON.parse(tareas);

function leerJson(rutaJson){
        let tareas = fs.readFileSync(rutaJson, { encoding: 'UTF-8' });
        let tareasJson = JSON.parse(tareas);
        return tareasJson;
}


// Funciones de la app
function lisstar(){
        tareasJson = leerJson(rutaJson);
        console.log('');
        console.log('Listado de tareas');
        console.log('-----------------');
        tareasJson.forEach ((tareas, i ) => {
            console.log(`${i + 1}. ${tareas.titulo} - ${tareas.estado}`) });
        console.log('-----------------');
        console.log('');
        }

function escribirJson(array){
    let tareaNuevaJson = JSON.stringify(array);
        fs.writeFileSync(rutaJson,tareaNuevaJson);    
};

function guardarTarea(string, arrayNuevo){
    let tareaNueva = {titulo: string, estado:"pendiente"};
    arrayNuevo.push (tareaNueva);
    return arrayNuevo;
};

function crear (){
    switch(process.argv[3]){
        case undefined: 
        console.log('');
        console.log('Debes crear una tarea');
        console.log('');
        break;
        default: 
        let tareasJson = leerJson(rutaJson); 
        let nuevaTarea= guardarTarea(process.argv[3], tareasJson);
        escribirJson(nuevaTarea);
        console.log('');
        console.log('-----------------');
        console.log('Agregaste una nueva tarea !');
        console.log(process.argv[3]+' => pendiente');
        console.log('-----------------');  
        console.log('');
        break;
    }
    
};


//Switch 

switch(process.argv[2]){
    case 'listar': lisstar();
        break;
    case 'crear': crear();       
        break;
    case undefined: 
        console.log('');
        console.log('"Atención" - Tienes que pasar una acción \nLas opciones son: "listar" y "crear"');
        console.log('');
    break;
   default: 
        console.log('');
        console.log ('No entiendo qué quieres hacer \nEjecuta por favor la acción "listar" o "crear"');
        console.log('');
    break;
};