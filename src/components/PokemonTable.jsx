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
          {text.split(',').map(type => {
            let color = 'blue'

            switch (type.trim()) {
              case 'normal':
                color = 'geekblue'
                break;
              case 'fighting':
                color = 'volcano'
                break;
              case 'flying':
                color = 'gold'
                break;
              case 'poison':
                color = 'purple'
                break;
              case 'ground':
                color = 'orange'
                break;
              case 'rock':
                color = 'magenta'
                break;
              case 'bug':
                color = 'lime'
                break;
              case 'ghost':
                color = 'cyan'
                break;
              case 'steel':
                color = 'green'
                break;
              case 'fire':
                color = 'red'
                break;
              case 'water':
                color = 'blue'
                break;
              case 'grass':
                color = 'green'
                break;
              case 'electric':
                color = 'geekblue'
                break;
              case 'psychic':
                color = 'purple'
                break;
              case 'ice':
                color = 'blue'
                break;
              case 'dragon':
                color = 'gold'
                break;
              case 'dark':
                color = 'purple'
                break;
              case 'fairy':
                color = 'pink'
                break;
              default:
                color = 'blue'
                break;
            }
            
            return (
              <Tag color={color} key={type}>
                {type}
              </Tag>
            );
          })}
        </>
      )
    },
  ];

  useEffect(() => {
    if (pokemons) {
      const data = pokemons.map((pokemon) => ({
        key: pokemon.id,
        name: pokemon.name,
        image: pokemon.image,
        types: pokemon.types,
      }));

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