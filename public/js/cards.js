// script to handle the "Pengalaman Teman Kita" cards :)

// the main story container row
const CARDS_CONTAINTER = document.getElementById("cards-container");
var STORY_CONTAINER_ROW = document.getElementById("cards-row");

// variables
var cardsCount = 0;

// the holy function to do this all
export function createCards(stories) {
    // make a new row for every 3 cards
    if (cardsCount % 3 == 0) {
        // create the row
        var row = document.createElement("div");
        var currentID = "cards-row".concat(cardsCount / 3);
        row.id = currentID;
        row.className = "row flex-row flex-nowrap m-1";
        row.style.overflowX = "auto";

        CARDS_CONTAINTER.appendChild(row);
        STORY_CONTAINER_ROW = document.getElementById(currentID);
    }

    //create the column
    var col = document.createElement("div");
    // make the column responsive for extra small, small, medium, large, and extra large screens
    col.className = "col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4";
    col.style.maxHeight = "300px";
    col.style.overflowY = "auto";

    // create the new card
    var newCard = document.createElement("div");
    newCard.className = "card my-4";

    // create the container for the card's contents
    var contentContainter = document.createElement("div");
    contentContainter.style.margin = "5%";

    // the card's title
    var cardTitle = document.createElement("h2");
    cardTitle.className = "card-title text-nowrap text-justify";
    cardTitle.style.overflowX = "auto";
    cardTitle.style.overflowY = "hidden";
    cardTitle.textContent = stories[0];

    // and the main content itself
    var cardContent = document.createElement("p");
    cardContent.style.overflowY = "hidden";
    cardContent.textContent = stories[1];

    // appending children to the contentContainer
    contentContainter.appendChild(cardTitle);
    contentContainter.appendChild(document.createElement("hr"));
    contentContainter.appendChild(cardContent);
    // appending child to the newCard and col
    newCard.appendChild(contentContainter);
    col.appendChild(newCard);
    // finish it all by adding the new column to the story container row
    STORY_CONTAINER_ROW.appendChild(col);

    cardsCount++;
}
