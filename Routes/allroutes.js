const express = require('express');
const login = require('../Controllers/auth');
const signup = require('../Controllers/auth')
const create = require('../Controllers/createNote');
const deletenote = require('../Controllers/deletenotes')
const updated = require('../Controllers/updateNote')
const router = express.Router();


router.post('/signup', signup);
router.post('/login', login);

router.post('/createnotes', create );
router.delete('/deletenotes', deletenote);
router.put('/updatenotes', updated )