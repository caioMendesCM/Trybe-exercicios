import React from 'react';
import styles from '../styles/Sprite.module.css';

class Sprite extends React.Component {
  render() {
    return(
      <div className={styles.container}>
        <img className={styles.sprite} src={this.props.image} alt="Pokemon Sprite" />
      </div>
    );
  }
}

export default Sprite;