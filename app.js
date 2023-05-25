let express = require("express");
let path = require("path");

let app = express();

app.listen(3000, () =>{
    console.log("yea")});

app.get("/", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/index.html");
    res.sendFile(htmlPath)
});