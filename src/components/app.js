import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../images/svg/logo.svg';
import pageStyles from './app.scss';
import Questions from './Questions/Questions';
import AnswerList from './AnswerList/AnswerList';
import Score from './Score/Score';
import Progress from './Progress/Progress';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      questionData: [
        {
          prompt: "Question 1 - A", 
          answers: [
            "Answer (A)",
            "Answer (B)",
            "Answer (C)",
            "Answer (D)"
          ], 
          correct: "Answer (A)"
        }, 
        {
          prompt: "Question 2 - B", 
          answers: [
            "Answer (A)",
            "Answer (B)",
            "Answer (C)",
            "Answer (D)"
          ], 
          correct: "Answer (B)"
        }, 
        {
          prompt: "Question 3 - C", 
          answers: [
            "Answer (A)",
            "Answer (B)",
            "Answer (C)",
            "Answer (D)"
          ], 
          correct: "Answer (C)"
        }, 
        {
          prompt: "Question 4 - D", 
          answers: [
            "Answer (A)",
            "Answer (B)",
            "Answer (C)",
            "Answer (D)"
          ], 
          correct: "Answer (D)"
        }, 
      ], 
      progress: 0,
      score: 0
    };
    this.checkAnswer = this.checkAnswer.bind(this);
    this.resetQuiz = this.resetQuiz.bind(this);
  }


  checkAnswer(answer) {
    let correctAnswer = this.state.questionData[this.state.progress].correct;
    let newScore = 0;
    let newProgress = 0;

    if (correctAnswer == answer) {
      newScore = this.state.score + 1;
      this.setState({score: newScore});
    } 

    newProgress = this.state.progress + 1;
    this.setState({progress: newProgress});
  }

  resetQuiz() {
    this.setState({score: 0, progress: 0});
  }

  renderQuiz() {
    let questionDatum = this.state.questionData[this.state.progress];
    return (
      <div>
        <Questions questionDatum={questionDatum} />
        <AnswerList answers={questionDatum.answers} answerCallback={this.checkAnswer}  />
        <Score score={this.state.score} />
        <Progress progress={this.state.progress} total={this.state.questionData.length} />
      </div>
    );
  }

  renderResult() {
    return (
      <div>
        <p>Quiz Finished!</p>
        <p>Your <Score score={this.state.score} /></p>
        <button type="button" onClick={this.resetQuiz}>Reset Quiz</button>
      </div>
    );
  }

  render() {
    return (
      <div className={pageStyles.App}>
        <div className={pageStyles.header}>
          <img src={logo} className={pageStyles.logo} alt="logo" />
          <h2 className={pageStyles.intro}>React Quiz</h2>
        </div>
        <div className={pageStyles.content}>
          {this.state.questionData.length <= this.state.progress ? this.renderResult() : this.renderQuiz()}
        </div>
     </div> 
    );
  }
};


export default App