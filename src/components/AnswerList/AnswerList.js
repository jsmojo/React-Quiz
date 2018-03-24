import React from 'react';
import styles from './AnswerList.scss'

function ListItem (props) {
    function onClickAnswer() {
      props.answerCallback(props.answerItem);
    }
       
    return (
      <li className={styles.item} onClick={onClickAnswer}>{props.answerItem} <span className={styles.arrow}></span></li>
    )
}

class AnswerList extends React.Component {
    render(props) {
      return (
        <ul className={styles.items}>
          {this.props.answers.map(function(answer, index) {
           return (
            <ListItem answerItem={answer} answerCallback={this.props.answerCallback} />
           )
          },this)}
        </ul>
      );
    }
  };

  export default AnswerList;