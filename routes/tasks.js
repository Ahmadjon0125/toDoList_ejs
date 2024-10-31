const express = require("express");
const router = express.Router();

// Test uchun oddiy massivda vazifalar
let tasks = [];

// Bosh sahifa (vazifalar ro'yxati)
router.get("/", (req, res) => {
    res.render("index", { tasks });
});

// Yangi vazifa shakli
router.get("/task/new", (req, res) => {
    res.render("new");
});

// Yangi vazifa yaratish
router.post("/task", (req, res) => {
    const { title, description } = req.body;
    tasks.push({ id: tasks.length + 1, title, description, status: "pending" });
    res.redirect("/");
});

// Vazifani tahrirlash shakli
router.get("/task/:id/edit", (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    res.render("edit", { task });
});

// Vazifani yangilash
router.post("/task/:id/update", (req, res) => {
    const { title, description, status } = req.body;
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (task) {
        task.title = title;
        task.description = description;
        task.status = status;
    }
    res.redirect("/");
});

// Vazifani o'chirish
router.delete("/task/:id/delete", (req, res) => {
    tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
    res.redirect("/");
});

module.exports = router;
