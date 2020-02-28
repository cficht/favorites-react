import request from 'superagent';

export async function searchVideogames(search) {
    return request.get(`https://infinite-island-88083.herokuapp.com/api/videogames?search=${search}`);
}