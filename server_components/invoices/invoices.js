const express = require('express');
const router = express.Router();
const getAll = require('./controllers/get_all.js').getAll;
const add = require('./controllers/add.js').add;

router.get('/', getAll);
router.post('/add', add);

module.exports = router;
