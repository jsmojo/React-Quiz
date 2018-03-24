import React from 'react';

class Progress extends React.Component {
  render() {
    return (
      <p>Question {this.props.progress + 1} of {this.props.total}</p>
    )
  }
}

export default Progress;