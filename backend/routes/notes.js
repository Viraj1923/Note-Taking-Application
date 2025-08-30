const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Note = require("../models/Note");

// Create Note
router.post("/", auth, async (req, res) => {
    try {
        const note = new Note({
            userId: req.user.id,
            content: req.body.content,
        });
        await note.save();
        res.json(note);
    } catch (err) {
        res.send("Server error");
    }
});

// Get Notes
router.get("/", auth, async (req, res) => {
    try {
        const notes = await Note.find({ userId: req.user.id }).sort({ createdAt: -1 });
        res.json(notes);
    } catch (err) {
        res.send("Server error");
    }
});

// Delete Note
router.delete("/:id", auth, async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.json({ msg: "Note deleted" });
    } catch (err) {
        res.send("Server error");
    }
});

module.exports = router;
