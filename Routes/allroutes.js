const express = require('express');
const {login, signup} = require('../Backend/Controllers/auth');
const auth = require('../Backend/Controllers/Middleware/authmiddleware')
const {createNote} = require('../Backend/Controllers/createnotes');
const {deletenotes} = require('../Backend/Controllers/deletenotes')
const {updateNote}= require('../Backend/Controllers/updatenotes')
const router = express.Router();
const User = require('../Frontend/Models/users')

router.post('/signup', signup);
router.post('/login', login);

router.post('/createnotes', auth, createNote );
router.delete('/deletenotes/:id', deletenotes);
router.put('/updatenotes/:id',auth,  updateNote )


module.exports = router