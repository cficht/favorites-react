import request from 'superagent';

export async function searchVideogames(search) {
    return request.get(`https://infinite-island-88083.herokuapp.com/api/videogames?search=${search}`);
}

export async function getFavorites(token) {
    return request.get(`https://infinite-island-88083.herokuapp.com/api/me/favorites`).set('Authorization', token);
}

export async function addFavorites(favorite, token) {
    return request.post(`https://infinite-island-88083.herokuapp.com/api/me/favorites`, favorite).set('Authorization', token);
}

export async function removeFavorites(favorite, token) {
    return request.delete(`https://infinite-island-88083.herokuapp.com/api/me/favorites/${favorite}`).set('Authorization', token);
}

export async function onSignup(user) {
    return request.post(`https://infinite-island-88083.herokuapp.com/api/auth/signup`, user);
}

export async function onSignin(user) {
    return request.post(`https://infinite-island-88083.herokuapp.com/api/auth/signin`, user);
}