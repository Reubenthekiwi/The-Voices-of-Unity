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
const forumReference = database.collection("forums");

const submitStoryForm = document.getElementById("submit-story-form");
const submitStoryButton = document.getElementById("submit-story-button");

authentication.onAuthStateChanged((user) => {
    submitStoryButton.onclick = () => {
        if (!user) {
            signIn();

            return;
        }

        const name = document.getElementById("name");
        const stories = document.getElementById("stories");

        if (!name.value) {
            alert("Your name cannot be empty!");

            return;
        }

        if (!stories.value) {
            alert("Your stories cannot be empty!");

            return;
        }

        forumReference.add({
            name: name.value,
            stories: stories.value,
            uid: user.uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });

        const storiesData = Object.values({
            name: name.value,
            stories: stories.value,
        });

        createCards(storiesData);

        submitStoryForm.reset();
    };
});

function readDataAndCreateCards() {
    forumReference
        .orderBy("createdAt")
        .get()
        .then((querySnapshot) => {
            querySnapshot.docs.map((document) => {
                const storiesData = Object.values({
                    names: document.data().name,
                    stories: document.data().stories,
                });

                createCards(storiesData);
            });
        });
}

document.addEventListener("DOMContentLoaded", readDataAndCreateCards);
