
import React from 'react';
import { shallow } from 'enzyme';

import GuessSection from '../guess-section';

describe(<GuessSection />, () => {
  it('should render without crashing', () => {
    shallow(<GuessSection />);
  });

  it('should contain a GueesForm component', () => {
    const wrapper = shallow(<GuessSection />);
    expect(wrapper.find('GuessForm').exists()).toEqual(true);
  });

  it('should render feedback', () => {
    const feedback = 'hello world';
    const wrapper = shallow(<GuessSection feedback={feedback} />);
    expect(wrapper.contains(feedback)).toEqual(true);
  });
});