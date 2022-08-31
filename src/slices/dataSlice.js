import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon } from '../api';
import { setLoading } from './uiSlice';

const initialState = {
  pokemons: {
    data: []
  },
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async ({items, page}, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemonsDetailed = await getPokemon(items, page);
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.data.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons.data[currentPokemonIndex].favorite;

        state.pokemons.data[currentPokemonIndex].favorite = !isFavorite;
      }
    },
  },
});

export const { setFavorite, setPokemons } = dataSlice.actions;

export default dataSlice.reducer;
