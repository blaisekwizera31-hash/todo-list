const express = require('express');
const login = require('../Controllers/auth');
const signup = require('../Controllers/auth')
const create = require('../Controllers/createNote');
const deletenote = require('../Controllers/deletenotes')
const updated = require('../Controllers/updateNote')
const router = express.Router();


router.post('/signup', signup);
router.post('/login', login);

router.post('/createnotes',auth, create );
router.delete('/deletenotes/:id', auth, deletenote);
router.put('/updatenotes/:id',auth,  updated )


module.exports = router