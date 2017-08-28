
import React from 'react';
import { shallow } from 'enzyme';

import GuessList from '../guess-list';

describe(<GuessList />, () => {
  it('should render without crashing', () => {
    shallow(<GuessList guesses={[]} />);
  });
});