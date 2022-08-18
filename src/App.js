import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import PokemonTable from './components/PokemonTable';
import logo from './statics/logo.svg';
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);

  const loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    <BrowserRouter>
      <div className='App'>
        <Col span={4} offset={10}>
          <img src={logo} alt='Pokedux' />
        </Col>
        <Col span={8} offset={8}>
          <Searcher />
        </Col>
        {loading ? (
          <Col offset={12}>
            <Spin spinning size='large' />
          </Col>
        ) : (
          <Routes>
            <Route path="/" element={<PokemonList pokemons={pokemons} />} />
            <Route path="/table" element={<PokemonTable pokemons={pokemons} />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
