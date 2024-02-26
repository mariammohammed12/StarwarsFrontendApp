const BASE_URL  = 'https://swapi.dev/api';

export const getFilms = async () => {
    const response = await fetch(`${BASE_URL}/films`);
    return response.json();
}

export const getStarships = async () => {
    const response = await fetch(`${BASE_URL}/starships`);
    return response.json();
}

export const getVehicles = async () => {
    const response = await fetch(`${BASE_URL}/vehicles`);
    return response.json();
}
