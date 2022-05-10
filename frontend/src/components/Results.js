//importing stylesheet
import './Results.css';
//import react tools needed
import React, {useContext } from "react";
//import context favourites array
import { FavsContext } from '../App';

//accepting results array, set as state and passed from Search component
function Results(resultsState, setResults) {

    //putting state array and function an variables
    const {favs, setFavs} = useContext(FavsContext);

    //function to add a track to favourites array. triggered by button click on each card
    const addFav= (item)=>{

        setFavs(favs => [...favs, item]);

    }

    return (
        <div className="Results container-fluid">

            <div className="row justify-content-center mt-5 colorDanger">

                {/* Search Heading */}
                <h2>Search Results</h2>

            </div>

            <div className="row justify-content-center ">

                {/* Favourites instructions */}
                <p> 

                    {/* Heart symbol */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg> 

                - Add an item from your list of favourites
                </p>
            </div>

            {/* Map over search results (from axios get in Search.js) to display each track as a card */}
            <div className="row justify-content-around">

                    {
                        resultsState.resultsState.map(item =>(

                            <div className="card col-2 mx-1 my-3 py-3 shadow" id={item.trackId}>
                                
                                {/* Track Image */}
                                <img  src={item.artworkUrl100} alt="Girl in a jacket" className="rounded "/>
                                
                                {/* Track Name */}
                                <p className='name align-items-center mt-4'>
                                  {item.trackName}
                                </p>

                                {/* Artist Name */}
                                <p className='artist colorDanger '>
                                    {item.artistName}
                                </p>
                            
                                {/* Track Genre */}
                                <p>
                                   {item.primaryGenreName}
                                </p>

                                {/* Track Release date. Used substring to extract the date */}
                                <p>
                                    {item.releaseDate.substring(0,4)}
                                </p>

                                {/* Row to display the add to favourites and preview buttons */}
                                <div className='row justify-content-end'>

                                {/* Col for add to favourites array button */}
                                <div className='col justify-content-end'>
                        
                                        {/* Button. Onclick add this card to favourites array, triggering a re-render */}
                                        <button type="button" onClick={() => {addFav(item)}} className="btn btn-danger mb-3 favBtn" id={item.trackId}>
                                            {/* Heart symbol */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                            </svg>
                                        </button>

                                </div>
                                
                                {/* Col for preview button */}
                                <div className='col justify-content-center'>

                                        {/* Buttton -> Links to apple Music Preview */}
                                        <a href={item.trackViewUrl}>

                                            <button type="button" className="btn btn-danger mb-3">
                                            
                                                {/* Music note symbol */}
                                                <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
                                                    <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
                                                    <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
                                                    <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
                                                </svg> 

                                                Preview

                                            </button>
                                        
                                        </a>
                                </div>

                                </div>

                            </div>

                        ))

                    }
                      
            </div>
            
        </div>

    );
    
  }
  
  export default Results;

