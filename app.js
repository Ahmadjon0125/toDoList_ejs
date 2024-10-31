const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const app = express();
const taskRoutes = require("./routes/tasks");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes
app.use("/", taskRoutes);

// Serverni ishga tushirish
const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log("Server is running on port " + PORT);
});
