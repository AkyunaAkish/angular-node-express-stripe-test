const express = require('express');
const router = express.Router();
const getAll = require('./controllers/get_all.js').getAll;
const add = require('./controllers/add.js').add;
const check_for_purchase = require('./controllers/check_for_purchase.js').check_for_purchase;
const check_for_subscription = require('./controllers/check_for_subscription.js').check_for_subscription;

router.get('/', getAll);
router.post('/add', add);
router.post('/check_for_subscription', check_for_purchase);
router.post('/check_for_purchase', check_for_subscription);

module.exports = router;
