import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/calculator';

afterEach(cleanup);

describe('Calcutor component', () => {
  it('Renders calculator component correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calculator />, div);
  });

  it('Render Calculator component snapshot.', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
