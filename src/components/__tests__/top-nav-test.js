
import React from 'react';
import { shallow, mount } from 'enzyme';

import TopNav from '../top-nav';

describe('<TopNav />', () => {
  const wrapper = shallow(<TopNav />);

  it('Renders without crashing', () => {
    wrapper;
  });

  it('ensures theres is an a link with class "what"', () => {
    expect(wrapper.find('.what').type()).toEqual('a');
  });

  it('ensures there is an link for a new game', () => {
    expect(wrapper.find('.new').type()).toEqual('a');
  });

  it('simulate a click on what', () => {
    wrapper.find('.what').simulate('click', { preventDefault() { } })
  });

  it('should simulate a click on new game', () => {
    wrapper.find('.new').simulate('click', { preventDefault() { } })
  });
});