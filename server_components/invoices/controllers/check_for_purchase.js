require('dotenv').config();
const stripe = require('stripe')(process.env.TEST_SECRET_KEY);
const knex = require('../../../db_config/knex.js');

exports.check_for_purchase = (req, res, next) => {
  knex('purchases')
  .where({
    invoice_id: req.body.id
  })
  .then((purchase) => {
    if (purchase.length > 0) {
      req.body.purchased = true;
      res.status(200).json(req.body);
    } else {
      req.body.purchased = false;
      res.status(200).json(req.body);
    }
  })
  .catch((err) => {
    req.body.purchased = false;
    res.status(200).json(req.body);
  });
};
