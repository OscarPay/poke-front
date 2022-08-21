import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons }) => {
  const { data } = pokemons;

  return (
    <div className='PokemonList'>
      {data.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
          />
        );
      })}
    </div>
  );
};


export default PokemonList;
