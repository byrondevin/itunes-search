//Imports: Express, Axios, Helmet
import express from "express";
import axios from "axios";
import helmet from "helmet";

//Assign express to 'app' variable 
const app = express();

//implementing helmet security
app.use(helmet());


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {

    console.log("listening on PORT");

})

if (process.env.NODE_ENV === 'production'){ 
    app.use(express.static(path.join(__dirname, 'frontend/build')));
        app.get('*',(req,res)=> {
            res.sendFile(path.resolve(__dirname, 'frontend', 'build','index.html'));
        });
}


// variable to hold itunes data
let itunesData = [];

// function to fetch itunes data using axios
const fetchItunesMovie = async (searchTerm, mediaType, countryCode) => {

    console.log(countryCode);

    try {

        itunesData = await axios.get(`https://itunes.apple.com/search?entity=${mediaType}&term=${searchTerm}&country=${countryCode}`)
        return itunesData;

    } catch (e) {
        console.log("Failed to fetch Itunes data. " + e);
        throw e;
    }

}


//response to get requests on /result. returns itunes data
app.get("/result", async (req, res) => {
        
        let searchTerm= req.query.searchTerm;
        let mediaType= req.query.mediaType;
        let countryCode= req.query.countryCode;
       
        console.log(countryCode);

        itunesData = await fetchItunesMovie(searchTerm, mediaType, countryCode);
        //res.send("test");
        res.json({
            "itunesData": itunesData.data
        });
        
});