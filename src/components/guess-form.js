import React from 'react';
import { connect } from 'react-redux';

import { setGuess } from '../actions/game'
import './guess-form.css';

export class GuessForm extends React.Component {
    onGuess(event) {
        event.preventDefault();
        const value = this.input.value;
        this.props.dispatch(setGuess(value));
    }

    render() {
        return (
            <form onSubmit={e => this.onGuess(e)}>
                <label htmlFor="userGuess">Enter your Guess</label>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder={Math.round(Math.random() * 100)} required
                    ref={input => this.input = input} />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
            </form>
        );
    }
};

const mapStateToProps = state => ({
    guessCount: state.guess.length,
    answer: state.answer
});

export default connect(mapStateToProps)(GuessForm);
