import React from 'react';

class Score extends React.Component {
    render() {
      return (
        <span>Score: {this.props.score}</span>
      )
    }
  }

  export default Score;