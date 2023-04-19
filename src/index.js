import express from 'express';
import config from './settings/config.js';
import PostRouter  from "./routes/post.routes.js";
import UserRouter from "./routes/user.routes.js"

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
        this.routes();
        this.init();

/*         if (typeof App.instance === "object") {
            return App.instance}
        else{
            App.instance = this;
            return this;
        } */
    }

    init() {
        //indica que la carpeta public se va a usar para ficheros estaticos
        /* app.use(express.static(__dirname + '/public')); */
        try {
            this.app.listen(config.app.port);
            console.log(`Servidor iniciado en el puerto ${config.app.port}`);
        } catch (err) {
            console.error(`Error`, err.message);
        };
    }

    routes(){
        this.app.use('/post', PostRouter);
        this.app.use('/user', UserRouter);
    }

}
new App();
