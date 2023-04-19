import express from 'express';
import config from './settings/config.js';
import coolImages from 'cool-images';

// estos imports son necesarios si se hace con ES Modules
import path from 'path';
import { fileURLToPath } from 'url';

/* Alternativa con Common JS
    const express = require ('express);
*/

class App {
    // necesario si se hace con ES Modules
    /*     __filename = fileURLToPath(import.meta.url);
        __dirname = path.dirname(__filename); */

    constructor() {
        this.app = express();
        this.init();
    }

    init() {
        //indica que la carpeta public se va a usar para ficheros estaticos
        /* app.use(express.static(__dirname + '/public')); */
        try {
            this.app.listen(config.app.port);
            console.log(`Servidor escuchando en el puerto ${config.app.port}`);
        } catch (err) {
            console.error(`Error`, err.message);
        };
    }
}

 export var myApp = new App();
