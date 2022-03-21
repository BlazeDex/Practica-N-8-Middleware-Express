const express = require('express'); //Importando el módulo Express.
const app = express(); //Asignando el módulo a una constante.

app.get('/', (requ, res) => { //route handler
    res.send('Hello World, this is the root route');
});

app.listen(3000); //El servidor estará respondiendo en el puerto 3000.

app.get('/uno', (req, res) => { //route handler
    //Esta es la respuesta que obtenemos al iniciar el localhost.
    res.send('Hello World, from route One');
});

app.get('/prueba', (req, res) => { //route handler
    /*Para obtener esta respuesta necesitamos acceder al directorio
    /prueba ==> localhost:3000/prueba */
    res.send('Hola desde prueba.');
});

//Prueba con contenido HTML.
app.get('/pruebaHTML', (req, res) => { //route handler
    res.send('<html>Hola desde prueba HTML.</html>');
});