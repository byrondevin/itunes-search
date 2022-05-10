//importing stylesheet
import './App.css';
//importing search module that is rendered in the return statement below
import Search from './components/Search.js';
//import react tools needed
import React, { useState, createContext } from "react";

//creating favourites array as context variable so can be shared to all child components
export const FavsContext = createContext({});


function App() {
  //setting favourites array as state variable so that re-render is triggered every time this variable's value changes (already shared with children through useContext)
  const [favs, setFavs] = useState([]);

  return (

    //surrouning Search component with usecontent so that the favourites array is shared to all the Search componont and all it's subsequent children
    <FavsContext.Provider value={{favs, setFavs}}>

      <div className="App">

        {/* rendering Search component and passing favs array, as well as its setter method */}
        <Search favs={favs} setFavs={setFavs}/>

      </div>

    </FavsContext.Provider>

  );

}

export default App;
