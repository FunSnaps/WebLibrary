const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

mongoose.connect(
    "mongodb+srv://FunSnaps:crmZuPUuK0EmoqnU@librarycluster.10bzy.mongodb.net/WebLibraryDb?retryWrites=true&w=majority"
);

const app = express();
app.use(bodyparser.json());

app.use("/posts", require("./routes/post"));

app.get("/", (req, res) => {
    res.send({Project: "MERN WebLibrary"});
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);

