import { Card } from 'antd';
import { useDispatch } from 'react-redux';
import Meta from 'antd/lib/card/Meta';
import StarButton from './StarButton';
import { setFavorite } from '../slices/dataSlice';
import './PokemonList.css';

const PokemonCard = ({ pokemon }) => {
  const { name, image, types, id, favorite } = pokemon;
  const dispatch = useDispatch();

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta description={types.map(type => type.name).join(', ')} />
    </Card>
  );
};

export default PokemonCard;
