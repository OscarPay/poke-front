import axios from 'axios';

export const getPokemon = (items = 20, page = 1) => {
  return axios
    .get(`http://localhost:3001/pokemons.json?items=${items}&page=${page}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};