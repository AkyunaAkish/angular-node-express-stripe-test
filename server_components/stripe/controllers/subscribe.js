require('dotenv').config();
const stripe = require('stripe')(process.env.TEST_SECRET_KEY);
const knex = require('../../../db_config/knex.js');
const dollars_to_cents = require('../../helpers/dollars_to_cents');

exports.subscribe = (req, res, next) => {
  const plan = stripe.plans.create({
    name: `${req.body.subscription_info.card_holder_first_name} ${req.body.subscription_info.card_holder_last_name}'s Plan`,
    id: `${req.body.subscription_info.card_holder_email} monthly`,
    interval: 'month',
    currency: 'usd',
    amount: dollars_to_cents(req.body.invoice.amount),
  }, (err, plan) => {
    if(err) {
      res.json({error: err});
    } else {
      const customer = stripe.customers.create({
        description: `Customer for ${req.body.subscription_info.card_holder_email}`,
        email: req.body.subscription_info.card_holder_email,
        source: req.body.stripe_token
      }, (err, customer) => {
        const subscription = stripe.subscriptions.create({
          customer: customer.id,
          plan: `${req.body.subscription_info.card_holder_email} monthly`,
        }, (err, subscription) => {
          if(err) {
            res.json({error: err});
          } else {
            res.json(subscription);
          }
        });
      })
    }
  });
};


// you must create a plan first
// var plan = stripe.plans.create({
//   name: 'Basic Plan',
//   id: 'basic-monthly',
//   interval: 'month',
//   currency: 'usd',
//   amount: 0,
// }, function(err, plan) {
//   // asynchronously called
// });


// then you must create a customer

// stripe.customers.create({
//   description: 'Customer for matthew.wilson@example.com',
//   email: 'jenny.rosen@example.com',
//   source: 'tok_19J4H1F4StKueV9cHfwY4p6i' // obtained with Stripe.js
// }, function(err, customer) {
//   // asynchronously called
// })

// then you must subscribe that customer to the plan you created
//
// stripe.subscriptions.create({
//   customer: customer.id,
//   plan: 'basic-monthly',
// }, function(err, subscription) {
//   // asynchronously called
// });
