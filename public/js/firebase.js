// Yes, this is really messy. But it works!

import { createCards } from "/js/cards.js";

// Authentication.
const authentication = firebase.auth();

const whenSignedIn = document.getElementById("when-signed-in");
const whenSignedOut = document.getElementById("when-signed-out");
const signInButton = document.getElementById("sign-in-button");
const signOutButton = document.getElementById("sign-out-button");

const signInProvider = new firebase.auth.GoogleAuthProvider();

function signIn() {
    authentication.signInWithPopup(signInProvider);
}

function signOut() {
    authentication.signOut();
}

signInButton.onclick = signIn;
signOutButton.onclick = signOut;

authentication.onAuthStateChanged((user) => {
    if (user) {
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
    } else {
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
    }
});

// Database.
const database = firebase.firestore();
const submitStoryForm = document.getElementById("submit-story-form");
const submitStoryButton = document.getElementById("submit-story-button");

submitStoryButton.onclick = () => {
    authentication.onAuthStateChanged((user) => {
        if (user) {
            const forumReference = database.collection("forums");
            const name = document.getElementById("name");
            const experiences = document.getElementById("experiences");

            if (experiences.value == "" || experiences.value == null) {
                alert("Your experiences cannot be empty!");
            }

            let forumInformation = {
                name: name.value,
                experiences: experiences.value,
            };

            forumReference.add({
                name: name.value,
                experiences: experiences.value,
                uid: user.uid,
            });

            let stories = [];
            stories = Object.values(forumInformation);

            createCards(stories);

            submitStoryForm.reset();
        } else {
            alert("Please sign in with your Google account.");

            signIn();
        }
    });
};

function readDataAndCreateCards() {
    const forumReference = database.collection("forums");

    let forumInformation = {};

    forumReference.get().then((querySnapshot) => {
        querySnapshot.docs.map((document) => {
            forumInformation = {
                names: document.data().name,
                experiences: document.data().experiences,
            };

            let stories = [];
            stories = Object.values(forumInformation);

            createCards(stories);
        });
    });
}

document.addEventListener("DOMContentLoaded", readDataAndCreateCards);
