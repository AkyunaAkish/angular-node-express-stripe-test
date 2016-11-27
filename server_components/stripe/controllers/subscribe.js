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
          plan: plan.id,
        }, (err, subscription) => {
          if(err) {
            res.json({error: err});
          } else {
            console.log('IN ELSE!!!!');
            console.log('REQ BODY!!!!', req.body);
            console.log('SUBSCRIPTION!!!!', subscription);
            knex('subscriptions')
            .insert({
              first_name: req.body.subscription_info.card_holder_first_name,
              last_name: req.body.subscription_info.card_holder_last_name,
              invoice_id: req.body.invoice.id,
              amount: req.body.invoice.amount,
              frequency: req.body.subscription_info.frequency,
              stripe_id: subscription.id
            })
            .then(() => {
              console.log('in then of knex');
              res.json({
                err: err,
                subscription: subscription
              });
            })
            .catch((err) => {
              console.log('in catch of knex', err);
              res.json(err);
            });
          }
        });
      })
    }
  });
};
