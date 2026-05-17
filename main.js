const path = require("path")
const express = require("express");

const app = express();
const port = 8080;

const videos = path.join(__dirname, "public/videos")

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, "public/index.html"));
    res.render("index", {
        logo: "logo.html"
    });
});

app.listen(port, () => { console.log("Server started on http://localhost:"+port) });