import dotenv from 'dotenv';

dotenv.config();

 const config = {
    app:{
        port : process.env.SERVER_PORT
    }
}

 export default config;


