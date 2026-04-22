const express = require('express');
const {login, signup} = require('../Controllers/auth');
const auth = require('../Middleware/authmiddleware')
const {createNote} = require('../Controllers/createnotes');
const {deletenotes} = require('../Controllers/deletenotes')
const {updateNote}= require('../Controllers/updatenotes')
const router = express.Router();
const User = require('../Models/users')

router.post('/signup', signup);
router.post('/login', login);

router.post('/createnotes', auth, createNote );
router.delete('/deletenotes/:id', deletenotes);
router.put('/updatenotes/:id',auth,  updateNote )


module.exports = router