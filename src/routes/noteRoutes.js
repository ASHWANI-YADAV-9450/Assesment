const express = require("express");
const { getAllNotes, getNoteById, createNote, updateNoteById, deleteNoteById, shareNote, searchNotes } = require("../controllers/noteController");
const verifyToken = require("../middleware/auth");



const router = express.Router();


router.get('/note',verifyToken, getAllNotes);
router.get('/note/:id',verifyToken, getNoteById);
router.post('/note',verifyToken, createNote);
router.put('/note/:id',verifyToken, updateNoteById);
router.delete('/note/:id',verifyToken, deleteNoteById);

router.post('/note/:id/share',verifyToken, shareNote);
router.get('/search',verifyToken, searchNotes);



module.exports = router