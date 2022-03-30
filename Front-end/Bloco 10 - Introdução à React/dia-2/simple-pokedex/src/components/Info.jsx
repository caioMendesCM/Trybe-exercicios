import React from 'react';
import styles from '../styles/Info.module.css';

class Info extends React.Component {
  render() {
    return (
      <div className={styles.info}>
        <p>
          Name: <span className='name'>{this.props.name}</span>
        </p>
        <p>
          Type: <span className='type'>{this.props.type}</span>
        </p>
        <p>
          Avarage Weight:{' '}
          <span className='weight'>
            {this.props.weight}
            {this.props.unit}
          </span>
        </p>
      </div>
    );
  }
}

export default Info;
