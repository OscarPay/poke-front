import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPokemonsWithDetails } from '../slices/dataSlice';
import { Table, Col, Tag } from 'antd'

const PokemonTable = ({ pokemons }) => {

  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const defaultPagination = {
    current: 1,
    pageSize: 20,
    total: 20,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
    onChange: (page, pageSize) => {
      dispatch(fetchPokemonsWithDetails({items: pageSize, page: page}));
    }
  }

  const [pagination, setPagination] = useState(defaultPagination);
  
  const columns = [
    {
      title: 'ID',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text, record) => (
        <img src={text} alt={record.name} />
      )
    },
    {
      title: 'Types',
      dataIndex: 'types',
      key: 'types',
      render: (text, record) => (
        <>
          {text.map(type => {
            const {name, color} = type;
            
            return (
              <Tag color={color} key={name}>
                {name}
              </Tag>
            );
          })}
        </>
      )
    },
  ];

  useEffect(() => {
    if (pokemons) {
      const data = pokemons.data.map((pokemon) => {
        return {
          key: pokemon.id,
          name: pokemon.name,
          image: pokemon.image,
          types: pokemon.types
        }
      });

      const pagination = {
        ...defaultPagination,
        current: pokemons.page,
        pageSize: pokemons.items,
        total: pokemons.total
      }

      setData(data);
      setPagination(pagination);
    }
  }, [pokemons]);

  // https://ant.design/components/pagination/
  return (
    <div className='PokemonTable'>
        <Col span={20} offset={2}>
          <Table dataSource={data} columns={columns} pagination={ pagination } />;
        </Col>
    </div>
  );
};

export default PokemonTable;