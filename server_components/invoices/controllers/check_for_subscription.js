require('dotenv').config();
const stripe = require('stripe')(process.env.TEST_SECRET_KEY);
const knex = require('../../../db_config/knex.js');

exports.check_for_subscription = (req, res, next) => {
  knex('subscriptions')
  .where({
    invoice_id: req.body.id
  })
  .then((subscription) => {
    if (subscription.length > 0) {
      req.body.subscribed = true;
      res.status(200).json(req.body);
    } else {
      req.body.subscribed = false;
      res.status(200).json(req.body);
    }
  })
  .catch((err) => {
    req.body.subscribed = false;
    res.status(200).json(req.body);
  });
};
