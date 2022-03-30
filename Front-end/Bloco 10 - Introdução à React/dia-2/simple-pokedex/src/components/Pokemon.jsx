import React from 'react';
import Sprite from './Sprite';
import Info from './Info';
import styles from '../styles/Pokemon.module.css';

class Pokemon extends React.Component {
  render() {
    return (
      <div className={styles.card}>
        <Info
          name={this.props.name}
          type={this.props.type}
          weight={this.props.weight}
          unit={this.props.unit}
        />
        <Sprite image={this.props.image}/>
      </div>
    );
  }
}

export default Pokemon;
