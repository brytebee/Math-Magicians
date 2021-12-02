import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from '../components/calculator';
import { Renderer } from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import { screen as DOM } from '@testing-library/dom';

afterEach(cleanup);

it('Renders calculator component correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculator />, div);
});

// it('Renders correctly', () => {
//   const tree = Renderer.create(<div data-id="dispaly"></div>).toJSON();
//   expect(tree).toMatchSnapshot();
// });
