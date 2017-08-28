
import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessForm from '../guess-form';

describe(<GuessForm />, () => {
  it('should render without crashing', () => {
    shallow(<GuessForm />)
  });

  it('should fire click event on submit', () => {
    const callback = jest.fn()
    const wrapper = mount(<GuessForm onGuess={callback} />);
    const value = 25;
    wrapper.find('#userGuess').node.value = value;
    wrapper.simulate('submit', { preventDefault() { } });
    expect(callback).toHaveBeenCalled();
  });
});