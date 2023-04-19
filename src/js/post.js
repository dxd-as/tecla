import  myApp  from "./index.js";
import coolImages from 'cool-images';

myApp.app.get('/post',  (request, response) =>{
    console.log('bbbbb');
   /*  response.send(`<img src= ${coolImages.one()}>`); */
   response.send('holaaaaa')
});
