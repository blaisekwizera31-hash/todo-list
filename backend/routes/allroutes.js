const express = require('express');
const { login, signup } = require('../controllers/auth');
const auth = require('../middleware/authmiddleware');
const { createNote } = require('../controllers/createnotes');
const { deletenotes } = require('../controllers/deletenotes');
const { updateNote } = require('../controllers/updatenotes');
const {getAllNotes} = require('../controllers/getAllnotes')
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

router.post('/createnotes', auth, createNote);
router.delete('/deletenotes/:id',auth, deletenotes);
router.put('/updatenotes/:id', auth, updateNote);
router.get('/getAllnotes', auth, getAllNotes )


module.exports = router;
