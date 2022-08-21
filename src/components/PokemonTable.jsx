import { useEffect, useState } from 'react';
import { Table, Col, Tag } from 'antd'

const PokemonTable = ({ pokemons }) => {
  const [data, setData] = useState();
  
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
      const data = pokemons.map((pokemon) => {
        return {
          key: pokemon.id,
          name: pokemon.name,
          image: pokemon.image,
          types: pokemon.types
        }
      });

      setData(data);
    }
  }, [pokemons]);

  return (
    <div className='PokemonTable'>
        <Col span={20} offset={2}>
          <Table dataSource={data} columns={columns} />;
        </Col>
    </div>
  );
};

export default PokemonTable;