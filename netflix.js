let trendingMovies = [
    "Stranger Things",
    "Wednesday",
    "Squid Game",
    "One Piece",
    "Breaking Bad"
];

let popularMovies = [
    "Dark",
    "Money Heist",
    "Black Mirror",
    "Shogun",
    "Loki"
];

let comedyShows = [
    "Friends",
    "Brooklyn 99",
    "The Office",
    "White Lotus",
    "The Bear"
];

let colors = [
    "red",
    "blue",
    "green",
    "purple",
    "orange"
];

// Function to add movies

function showMovies(movieArray, rowId){

    let row = document.getElementById(rowId);

    for(let i = 0; i < movieArray.length; i++){

        let card = document.createElement("div");

        card.className = "movie-card " + colors[i % colors.length];

        card.innerHTML = movieArray[i];

        card.onclick = function(){
            alert(movieArray[i]);
        };

        row.appendChild(card);
    }
}

// Calling Functions

showMovies(trendingMovies, "trending-row");

showMovies(popularMovies, "popular-row");

showMovies(comedyShows, "comedy-row");
