import React from 'react';
import styles from './Questions.scss'

class Questions extends React.Component {
    render() {
      return (
        <p className={styles.title}>{this.props.questionDatum.prompt}</p>
      )
    }
  }

  export default Questions