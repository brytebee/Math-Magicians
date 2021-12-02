import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import Nav from '../pages/Nav';
// import renderer from 'react-test-renderer';

afterEach(cleanup);

describe('Nav component', () => {
  it('Renders nav component correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Nav />, div);
  });

  //   it('Render Calculator component snapshot.', () => {
  //     const tree = renderer.create(<Calculator />).toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
});
