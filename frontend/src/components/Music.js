import React, { useState, useEffect } from "react";
import axios from "axios";

function Music() {

    let itunesImport = [];
    let artistName;
    let songName;
   

    const getItunesData = async (e) => {

        e.preventDefault();
        console.log(e);

        //fetching form data put into async function so i can await the values before the get request is made
        const getFormData = async () => {
            artistName = e.target[0].value;
            console.log(artistName);

            songName= e.target[1].value
            console.log(songName);
        }
        //get form data called with await so that all data is collected before get request is made
        await getFormData();
     

        try {
            console.log("test inside frontend axios try");
            
            
            //using axios to fetch the itunes data array from the backend express app and storing the array in a temporary variable
            itunesImport = await axios.get(`/music-result?artistName=${artistName}&songName=${songName}&country=us`);
            console.log(itunesImport);
            return itunesImport;
       
        } catch (e) {
          //catching and logging any error if axios get fails
          console.log("Error");
          console.log(e);
        }
      }


    return (
      <div className="App container">

        <h1>Search Music</h1>

        <form onSubmit={getItunesData} action="/result">

            <div className="form-group">
                <label for="artistNameInput">Artist Name</label>
                <input type="text" className="form-control" id="artistNameInput" name="artistNameInput" placeholder="Jimi Hendrix"  />
            </div>

            <div className="form-group">
                <label for="songInput">Track/Song Name</label>
                <input type="text" className="form-control" id="songInput" name="songInput" placeholder="Crosstown Traffic"/>
            </div>

            <div className="form-group">
                  <button type="submit" className="btn btn-warning">
                    Submit 
                  </button>
            </div>
        </form>
      </div>
    );
  }
  
  export default Music;