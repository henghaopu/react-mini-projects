import React from 'react';
import Todo from './Todo';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('Renders the components without error', () => {
  const wrapper = shallow(<Todo />);
  const todoComponent = wrapper.find('[data-test="component-todo"]');
  expect(todoComponent.length).toBe(1);
});
