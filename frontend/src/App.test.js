import React, {useContext } from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import addFav from './App'
import rendered from 'react-test-renderer'

test('matches snapshot', () => {
    const tree = renderer
  
      .create(<App />)
      .toJSON()
      expect(tree).toMatchSnapshot();
    
  });



describe("snapshot testing", () => {

  test('snapshot for App component', () => {
    // render(<App />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();


    const renderedComponent= rendered.create(<App />).toJSON()
    expect(renderedComponent).toMatchSnapshot()
  });

})

// describe("addFavs method test", () => {

//   test('addFavs adds item to favourites array', () => {
//     const expected = {value:'testing'};
    
//     expect(addFav(expected)).toEqual(favs.arrayContaining(expected));
//   })
// })


