export const SET_GUESS = 'SET_GUESS';
export const setGuess = guess => ({
  type: SET_GUESS,
  guess,
});

export const CORRECT_ANSWER = 'CORRECT_ANSWER';
export const newGame = answer => ({
  type: CORRECT_ANSWER,
  answer: Math.round(Math.random() * 100),
});

export const FEED_BACK = 'FEED_BACK';
export const feedBack = message => ({
  type: FEED_BACK,
  message,
});