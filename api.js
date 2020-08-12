const express = require("express");
const bodyParser = require("body-parser");
const Drawing = require("./models/drawing");
const cors = require("cors");
const { response } = require("express");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.get("/", (req, res) => {
    res.send("OK");
});

app.get("/next-id", async (req, res) => {
    const drawings = await Drawing.find();
    if(drawings.length > 0){
        const nextID = await Drawing.sort({userID:-1}).limit(1);
        res.send({"id": nextID[0].userID + 1});
    }else{
        res.send({"id": 0});
    }
});

app.get("/drawings", async (req, res) => {
    const drawings = await Drawing.find();
    res.send(drawings);
});

app.post("/saveDrawing", (req, res) => {
    console.log(req.body);
    const newDrawing = Drawing.create(req.body);

    res.send(newDrawing);
});

app.listen(3003, () => {
    console.log("Server running in port 3003");
});

