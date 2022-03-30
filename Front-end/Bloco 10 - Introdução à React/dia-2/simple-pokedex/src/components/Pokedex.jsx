import React from 'react';
import Pokemon from './Pokemon';
import data from '../data';
import styles from '../styles/Pokedex.module.css';

class Pokedex extends React.Component {
  render() {
    return (
      <>
        <h1 className={styles.title}>Pokedex</h1>
        <div className={styles.pokedex}>
          {data.map((poke) => (
            <Pokemon
              name={poke.name}
              type={poke.type}
              weight={poke.averageWeight.value}
              unit={poke.averageWeight.measurementUnit}
              image={poke.image}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Pokedex;
