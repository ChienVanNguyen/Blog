const express = require("express");
require("ejs"); // Important
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const {
    addPost,
    getPost,
    updatePost,
    removePost,
} = require("./src/routes/post.routes");

const app = express();

// Set template engine
app.set("view engine", "ejs");

try {
    mongoose.connect("mongodb://localhost:27017/cats");
    console.log("Connected to MongoDB!");
} catch (error) {
    console.log("Cannot connect MongoDB", error);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Đăng ký thư mục public
app.use(express.static("public"));

app.get("/posts/store", async (req, res) => {
    // open create.ejs page
    res.render("create");
});

app.post("/posts/store", async (req, res) => {
    // const title = req.body.title;
    // const body = req.body.body;
    const { title, body } = req.body; // for short

    try {
        const newPost = await addPost(title, body);

        res.status(200).json({
            status: "success",
            data: newPost,
        });
    } catch (error) {
        res.status(400).json({
            status: "error",
            // error: error,
            error, // for short
        });
    }
});

app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/post", (req, res) => {
    res.render("post");
});

app.get('/posts/new', (req, res) => {
    res.render('create')
    })
app.get("/", (req, res) => {
    res.render("index");
});


app.listen(5000, () => {
    console.log("Go to http://localhost:5000");
});