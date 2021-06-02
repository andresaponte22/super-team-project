/** JAVASCRIPT CODE OUTLINE
 * - variable declarations
 * - functions
 *       - initalise
 *       - handle user submissions
 *       - fetch API data
 *       - localStorage
 *       - display results to pages
 * - event listeners
 * - list functions to call upon page load
 */





// ---- Variable declarations ---- 

// Reference to important DOM elements
// e.g. var [nameEl] = document.querySelector('#[id]');
// TO DO: Add global variables that will reference DOM elements
var movieTitleInput = document.querySelector("#movieTitle")
var genreChoice = document.querySelector('#genreChoice')
var searchButton = document.querySelector('#searchBtn')


var pastSearches = []



// Global Variables
// TO DO: Define any variables with global scope excluding those referencing DOM elements already noted above









// ---- Functions ---- 

// Function - Initialise web app
// TO DO: Create function that is run when page first loaded, e.g., get localStorage.









// ---- Functions to handle user form submissions ---- 

// Function - Handle form / search submit including calling search APIs
// TO DO: Create function that handles user submission (e.g., get movie title OR genre, check not blank, call APIs)







// ---- Functions to fetch API data  ---- 

// Function - YouTube API fetch here - search the API
// TO DO: Create YouTube API fetch










// Function - Get Movie ID - search the API
// TO DO: Create movie database API fetch to get movie ID based on user movie title input
function getMovieID() {
    movieTitleInput = "Pulp Fiction";

    var movieID;

    // https://imdb8.p.rapidapi.com/title/get-reviews?tconst=tt0944947&currentCountry=US&purchaseCountry=US - sample URL, get-reviews

    // Get list of records matching user movie title input, select first record and assign to 'movieID' variable
    var requestUrl = `https://imdb8.p.rapidapi.com/auto-complete?q=${movieTitleInput}`   
    fetch(requestUrl, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "1d90138037mshd72dce2bb152a40p19e98ajsn12ed41b42bf2",
		"x-rapidapi-host": "imdb8.p.rapidapi.com"
	}
    })
    .then(response => {
	    console.log(response);
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        movieID = data.d[0].id;
        console.log(`movieID: ${movieID}`);
        getMovieReview(movieID);
    })
    .catch(err => {
	    console.error(err);
    });
}

// Function - get movie review results based on movieID
// TO DO: Create function that gets movie review data
function getMovieReview (movieID) {

    // Get review data for movie based on 'movieID' variable
    var requestUrl = `https://imdb8.p.rapidapi.com/title/get-reviews?tconst=${movieID}&currentCountry=CA&purchaseCountry=CA`   
    var metaScore;
    var imbdRating;

    fetch(requestUrl, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "1d90138037mshd72dce2bb152a40p19e98ajsn12ed41b42bf2",
		"x-rapidapi-host": "imdb8.p.rapidapi.com"
	}
    })
    .then(response => {
	    console.log(response);
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        
        metaScore = data.metacritic.metaScore;
        console.log(`metaScore: ${metaScore}`);

        imbdRating = data.imdbrating.rating;
        console.log(`IMBd rating: ${imbdRating}`);
    })
    .catch(err => {
	    console.error(err);
    });

}

// ---- Function to update localStorage ---- 

// Function - Update variables and localStorage related to saved/searched movie titles, then call function to display on page
// TO DO: Create function that will update searched/saved movie list variables & localStorage then call funciton to update display on page
function updateSearchHistory() {

}








// ---- Functions to update display on pages ---- 

// Function - Display YouTube video to main page
// TO DO: Create function that will add YouTube API result to main page










// Function - Display Rotten Tomates movie critic reviews & scores to main page
// TO DO: Create function that will add Rotten Tomates API reviews and scores to main page










// Function - Display Rotten Tomates movie listing based on genre results on second page, clickable movie info
// TO DO: Create function that will add Rotten Tomates API movie list based on genre, clickable to display on main page










// Function - Display saved / searched (?) movies on main page 
// TO DO: Create function that will display saved/searched movies to main page









// ---- Event listeners ---- 

// TO DO: Create event listeners 
// e.g. languageButtonsEl.addEventListener('click', buttonClickHandler);

//Event listener for click on search button
searchButton.addEventListener("click", function(event) {
  event.preventDefault()
  
  var movieTitle = document.querySelector("#movieTitle")

  localStorage.setItem("movieTitle", movieTitle.value)

  var movieTitleTest = localStorage.getItem("movieTitle")
  console.log(movieTitleTest)
  updateSearchHistory()
})









// ---- Functions to call  ---- 

// TO DO: List any functions that are to be called upon main page load

getMovieID();







