const express = require("express");
const app = express();

app.set("view engine", "ejs");

const comics = [
    {
    title: "Watchmen",
    description: "I'm baby copper mug affogato flexitarian snackwave, four dollar toast tumblr tote bag. Hot chicken stumptown vice chambray, pork belly yuccie celiac meh freegan mumblecore affogato williamsburg fam VHS roof party. Pork belly live-edge cold-pressed tote bag selvage. Crucifix mumblecore poke prism marfa keffiyeh.",
    image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Watchmen_film_poster.jpg"
    },
    {
    title: "Batman",
    description: "I'm baby copper mug affogato flexitarian snackwave, four dollar toast tumblr tote bag. Hot chicken stumptown vice chambray, pork belly yuccie celiac meh freegan mumblecore affogato williamsburg fam VHS roof party. Pork belly live-edge cold-pressed tote bag selvage. Crucifix mumblecore poke prism marfa keffiyeh.",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg"
    },
    {
    title: "Y: The Last Man",
    description: "I'm baby copper mug affogato flexitarian snackwave, four dollar toast tumblr tote bag. Hot chicken stumptown vice chambray, pork belly yuccie celiac meh freegan mumblecore affogato williamsburg fam VHS roof party. Pork belly live-edge cold-pressed tote bag selvage. Crucifix mumblecore poke prism marfa keffiyeh.",
    image: "https://upload.wikimedia.org/wikipedia/en/0/04/Y_-_The_Last_Man_23_-_Widow%27s_Pass_03_-_00_-_FC.jpg"
    }
]

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/comics", (req, res) => {
    res.render("comics", {comics});
});

app.listen("3000", () => {
    console.log("yelp_comic is running...");
});