// Script to handle the "Pengalaman Teman Kita" cards :)

// The main story container row.
const cardsContainer = document.getElementById("cards-container");
let storyContainerRow = document.getElementById("cards-row");

let cardsCount = 0;

// The holy function to do this all.
export function createCards(stories) {
    // Make a new row for every 3 cards.
    if (cardsCount % 3 == 0) {
        // Create the row.
        const row = document.createElement("div");
        const currentId = "cards-row".concat(cardsCount / 3);
        row.id = currentId;
        row.className = "row flex-row flex-nowrap m-1";
        row.style.overflowX = "auto";

        cardsContainer.appendChild(row);
        storyContainerRow = document.getElementById(currentId);
    }

    // Create the column.
    const column = document.createElement("div");
    // Make the column responsive for extra small, small, medium, large, and extra large screens.
    column.className = "col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4";
    column.style.maxHeight = "300px";
    column.style.overflowY = "auto";

    // Create the new card.
    const newCard = document.createElement("div");
    newCard.className = "card my-4";

    // Create the container for the card's contents.
    const contentContainter = document.createElement("div");
    contentContainter.style.margin = "5%";

    // The card's title.
    const cardTitle = document.createElement("h2");
    cardTitle.className = "card-title text-nowrap text-justify";
    cardTitle.style.overflowX = "auto";
    cardTitle.style.overflowY = "hidden";
    cardTitle.textContent = stories[0];

    // And the main content itself.
    const cardContent = document.createElement("pre");
    cardContent.style.overflowY = "hidden";
    cardContent.textContent = stories[1];

    // Appending children to the contentContainer.
    contentContainter.appendChild(cardTitle);
    contentContainter.appendChild(document.createElement("hr"));
    contentContainter.appendChild(cardContent);

    // Appending child to the newCard and column.
    newCard.appendChild(contentContainter);
    column.appendChild(newCard);

    // Finish it all by adding the new column to the story container row.
    storyContainerRow.appendChild(column);

    cardsCount++;
}
