import React from 'react';
import { shallow } from 'enzyme';
import GoogleAuth from './GoogleAuth';

describe('<GoogleAuth />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<GoogleAuth />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
