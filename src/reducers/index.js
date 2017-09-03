
import { SET_GUESS, CORRECT_ANSWER } from '../actions/game';
import { SHOW_INFO_MODAL } from '../actions/header';

const initialState = {
  request: false,
  guess: [],
  correctAnswer: Math.round(Math.random() * 100),
};

export const guessGameReducer = (state = initialState, action) => {
  if (action.type === CORRECT_ANSWER) {
    state = Object.assign({
    }, initialState, {
        answer: action.answer
      });
    return state;
  }
  else if (action.type === SET_GUESS) {
    const guess = parseInt(action.guess, 10);
    if (isNaN(guess)) {
      state = Object.assign({}, state, {
        feedback: 'Please enter a valid number'
      });

      return state;
    }

    const difference = Math.abs(guess - state.answer);

    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    }
    else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    }
    else if (difference >= 10) {
      feedback = 'You\'re Warm';
    }
    else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    }
    else {
      feedback = 'You got it!';
    }

    state = Object.assign({}, state, {
      feedback,
      guess: state.guess.concat(action.guess)
    });

    return state;
  }
  else if (action.type === SHOW_INFO_MODAL) {
    state = Object.assign({}, state, {
      showInfoModal: !state.showInfoModal
    });
    return state;
  }
  return state;
};
