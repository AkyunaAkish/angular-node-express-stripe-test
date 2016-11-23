const express = require('express');
const router = express.Router();
const stripePurchase = require('./controllers/stripe_purchase.js');
const stripeSubscription = require('./controllers/stripe_subscription.js');

router.post('/purchase', stripePurchase);
router.post('/subscription', stripeSubscription);

module.exports = router;
