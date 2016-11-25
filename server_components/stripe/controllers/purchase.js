require('dotenv').config();
const stripe = require('stripe')(process.env.TEST_SECRET_KEY);
const knex = require('../../../db_config/knex.js');
const dollars_to_cents = require('../../helpers/dollars_to_cents');

exports.purchase = (req, res, next) => {
  const charge = stripe.charges.create({
    amount: dollars_to_cents(req.body.invoice.amount),
    currency: 'usd',
    source: req.body.stripe_token,
    description: 'Example charge',
    metadata: req.body.invoice
  }, (err, charge) => {
    if (err && err.type === 'StripeCardError') {
      res.json('DECLINED');
    } else {
      res.json('SUCCESS');
    }
  });
};
