import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';
import LanguageService from '../../services/language-service';

class LearningPage extends Component {
  static defaultProps = {
    history: () => {}
  };
  static contextType = UserContext;

  state = { currentWord: {}, error: null };

  componentDidMount = () => {
    LanguageService.getWord()
      .then((currentWord) => {
        this.setState({
          currentWord
        });
        this.context.setCurrentWord(currentWord);
      })
      .catch((error) => {
        this.setState({ error });
        this.context.setError(error);
      });
  };

  render() {
    const { currentWord } = this.state;

    return (
      <div className='learning-container'>
        <h2>Translate the word:</h2>
        <span className='next-word'>{currentWord.nextWord}</span>
        <form action=''>
          <label htmlFor='learn-guess-input'>
            What's the translation for this word?
          </label>
          <input
            type='text'
            id='learn-guess-input'
            name='learn-guess-input'
            required
          />
          <button type='submit'>Submit your answer</button>
        </form>
        <div className='answer-count'>
          <span>
            You have answered this word correctly {currentWord.wordCorrectCount}{' '}
            times.
          </span>
          <span>
            You have answered this word incorrectly{' '}
            {currentWord.wordIncorrectCount} times.
          </span>
        </div>
        <p>Your total score is: {currentWord.totalScore}</p>
      </div>
    );
  }
}

export default LearningPage;
