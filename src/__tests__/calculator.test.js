import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import Calculator from '../components/calculator';

afterEach(cleanup);

it('Renders calculator component correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculator />, div);
});
