import React from 'react';
import renderer from 'react-test-renderer';
import Home from "../pages/Home";
import Quote from "../pages/Quote";


describe('Test that all components are rendering just fine.', () => {

  it('Render the Home page.', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Render the Quote page', () => {
    const tree = renderer
      .create(<Quote />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})