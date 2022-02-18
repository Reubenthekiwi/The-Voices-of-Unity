// script to handle the "Pengalaman Teman Kita" cards :)

// the main story container row
const CARDS_CONTAINTER = document.getElementById("cards-container");
var STORY_CONTAINER_ROW = document.getElementById("cards-row");

// variables
var cardsCount = 0;

// the holy function to do this all
function createCards(stories) {
    // make a new row for every 3 cards
    if(cardsCount%3 == 0) {
        // create the row
        var row = document.createElement("div");
        var currentID = "cards-row".concat(cardsCount/3);
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

// stories to be added to the page
// the first value is the author's name and the second value is the story text itself
const STORIES = [
    ["Abba", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta nulla ut felis fringilla commodo. Pellentesque in felis ut purus porta ornare. Ut iaculis urna eros, non malesuada odio dapibus ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac commodo nisi. Phasellus fringilla placerat nisi, eget finibus mi pharetra sed. Nulla at pellentesque eros, ac euismod lorem. Maecenas ullamcorper risus non arcu iaculis, sed sodales lectus luctus. Ut maximus purus in eleifend ornare. Donec condimentum lectus nec ex molestie venenatis. Ut facilisis tincidunt nunc, sed feugiat lectus pellentesque id. Quisque sit amet orci nisl. Nunc commodo iaculis est semper finibus. Sed sollicitudin est feugiat, placerat ante quis, tincidunt metus. Integer scelerisque lectus quis interdum gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;"],
    ["Bobbi", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta nulla ut felis fringilla commodo. Pellentesque in felis ut purus porta ornare. Ut iaculis urna eros, non malesuada odio dapibus ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac commodo nisi. Phasellus fringilla placerat nisi, eget finibus mi pharetra sed. Nulla at pellentesque eros, ac euismod lorem. Maecenas ullamcorper risus non arcu iaculis, sed sodales lectus luctus. Ut maximus purus in eleifend ornare. Donec condimentum lectus nec ex molestie venenatis. Ut facilisis tincidunt nunc, sed feugiat lectus pellentesque id. Quisque sit amet orci nisl. Nunc commodo iaculis est semper finibus. Sed sollicitudin est feugiat, placerat ante quis, tincidunt metus. Integer scelerisque lectus quis interdum gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;"],
    ["Cinna", "Text"],
    ["Denno", "Text"],
    ["Eddo", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta nulla ut felis fringilla commodo. Pellentesque in felis ut purus porta ornare. Ut iaculis urna eros, non malesuada odio dapibus ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac commodo nisi. Phasellus fringilla placerat nisi, eget finibus mi pharetra sed. Nulla at pellentesque eros, ac euismod lorem. Maecenas ullamcorper risus non arcu iaculis, sed sodales lectus luctus. Ut maximus purus in eleifend ornare. Donec condimentum lectus nec ex molestie venenatis. Ut facilisis tincidunt nunc, sed feugiat lectus pellentesque id. Quisque sit amet orci nisl. Nunc commodo iaculis est semper finibus. Sed sollicitudin est feugiat, placerat ante quis, tincidunt metus. Integer scelerisque lectus quis interdum gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;"],
]

// loop over the STORIES array and create a card for each of them
STORIES.forEach(createCards);