
import React from 'react';
import { shallow, mount } from 'enzyme';

import Header from '../header';

describe(<Header />, () => {
  const wrapper = shallow(<Header />);

  it('should render without crashing', () => {
    wrapper
  });

  it('should test that info modal does not exist', () => {
    expect(wrapper.find('InfoModal').exists()).toEqual(false);
  });

  it('should test the state of info modal', () => {
    wrapper.instance().toggleInfoModal(true);
    expect(wrapper.find('InfoModal').exists()).toEqual(true);
  });
});