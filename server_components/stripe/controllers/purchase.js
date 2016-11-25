require('dotenv').config();
const stripe = require('stripe')(process.env.TEST_SECRET_KEY);
const knex = require('../../../db_config/knex.js');

function dollars_to_cents (amount) {
  if (typeof amount !== 'string' && typeof amount !== 'number') {
    throw new Error('Amount passed must be of type String or Number.')
  }

  return Math.round(100 * parseFloat(typeof amount === 'string' ? amount.replace(/[$,]/g, '') : amount))
}

exports.purchase = (req, res, next) => {
  // res.json(req.body);
  console.log('REQ.BODY', req.body);
  const charge = stripe.charges.create({
    amount: dollars_to_cents(req.body.invoice.amount),
    currency: 'usd',
    source: req.body.stripe_token,
    description: 'Example charge',
    metadata: req.body.invoice
  }, (err, charge) => {
    if (err && err.type === 'StripeCardError') {
      // The card has been declined
      console.log('DECLINED');
      res.json('Declined');
    } else {
      console.log('SUCCESS', charge, err);
      res.json('Success');
    }
  });
};
