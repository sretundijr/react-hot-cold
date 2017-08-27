
import React from 'react';
import { shallow, mount } from 'enzyme';

import InfoModal from '../info-modal';

describe(<InfoModal />, () => {
  const wrapper = shallow(<InfoModal />);

  // smoke tests
  it('should render without crashing', () => {
    wrapper;
  });

  it('should have class overlay', () => {
    expect(wrapper.hasClass('overlay')).toEqual(true);
  });

  it('should have an a tag', () => {
    expect(wrapper.find('.close').type()).toEqual('a');
  });

  it('should fire a click event', () => {
    wrapper.find('.close').simulate('click', { preventDefault() { } });
  });
});