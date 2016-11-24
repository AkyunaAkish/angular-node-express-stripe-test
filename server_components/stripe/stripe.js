const express = require('express');
const router = express.Router();
const stripePurchase = require('./controllers/stripe_purchase.js').stripePurchase;
const stripeSubscription = require('./controllers/stripe_subscription.js').stripeSubscription;

router.post('/purchase', stripePurchase);
router.post('/subscription', stripeSubscription);

module.exports = router;
