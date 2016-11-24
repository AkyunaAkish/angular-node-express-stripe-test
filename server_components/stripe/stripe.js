const express = require('express');
const router = express.Router();
const purchase = require('./controllers/purchase.js').purchase;
const subscribe = require('./controllers/subscribe.js').subscribe;

router.post('/purchase', purchase);
router.post('/subscribe', subscribe);

module.exports = router;
