import coolImages from 'cool-images';

const setImages = (request, response) =>{
    response.send(`<img src= ${coolImages.one()}>`);
}

export default setImages;