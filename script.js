///// Books Page /////

//Sort Authors Alphabetically//

// Sort Fiction Books //

//event listener ensures to run once HTML is fully loaded
newFunction();


function newFunction() {
    document.addEventListener("DOMContentLoaded", function () {
        //used to get the list items
        let fictionList = document.getElementById("fictionList");
        //convert list to array
        let fictionAlphabetically = Array.from(fictionList.children);

        //sort the list alphabetically 
        fictionAlphabetically.sort(function (a, b) {
            return a.textContent.localeCompare(b.textContent);
        });

        //clearing the current list
        fictionList.innerHTML = "";

        //add sorted items back into list
        fictionAlphabetically.forEach(function (fictionBooks) {
            fictionList.appendChild(fictionBooks);
        });
    });

    // Sort Non-Fiction Books //
    //event listener ensures to run once HTML is fully loaded
    document.addEventListener("DOMContentLoaded", function () {
        //used to get the list items
        let nonFictionList = document.getElementById("nonFictionList");
        //convert list to array
        let nonFictionArray = Array.from(nonFictionList.children);

        //sort the list alphabetically 
        nonFictionArray.sort(function (a, b) {
            return a.textContent.localeCompare(b.textContent);
        });

        //clearing the current list
        nonFictionList.innerHTML = "";

        //add sorted items back into list
        nonFictionArray.forEach(function (nonFictionBooks) {
            nonFictionList.appendChild(nonFictionBooks);
        });
    });
}


// //search bar albums 
function searchArtists(){
const artist = document.getElementById("searchInputArtist");
const albumList = document.querySelectorAll("#albumList li");

artist.addEventListener("input", function () {
  const value = this.value.toLowerCase();

  albumList.forEach(li => {
    const spanText = li.querySelector("span").textContent.toLowerCase();

    if (spanText.includes(value)) {
      li.style.display = "";
    } else {
      li.style.display = "none";
    }
  });
});
}


//search bar movies 
function searchMovies(){
const movie = document.getElementById("searchInputMovie");
const movieList = document.querySelectorAll("#movieList li");

movie.addEventListener("input", function () {
  const value = this.value.toLowerCase();

  movieList.forEach(li => {
    const spanText = li.querySelector("span").textContent.toLowerCase();

    if (spanText.includes(value)) {
      li.style.display = "";
    } else {
      li.style.display = "none";
    }
  });
});
}

