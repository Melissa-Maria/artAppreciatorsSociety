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
// Search Bar //
// let input = document.querySelector('searchBar');
// let listItems = document.querySelector('li');
// input.addEventListener('searchbar', filter);

// function filter (){
//     let search = input.value.toLowerCase();

//     listItems.forEach(function(li){
//         text = li.innerHTML.toLowerCase();
//         found = text.indexOf(search);
//         if(search == ''){
//             li.style.display = 'block';
//         }else if(found == -1){
//             li.style.display = 'none';
//         } else {
//             li.style.display = 'block';
//         }
//     })
// }
