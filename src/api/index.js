import axios from 'axios';

export const getPokemon = () => {
  return axios
    .get('http://localhost:3001/pokemons.json')
    .then((res) => res.data)
    .catch((err) => console.log(err));
};