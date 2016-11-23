require('dotenv').config();

const knex = require('../../../db_config/knex.js');

exports.stripeSubscription = (req, res, next) => {
  res.json(req.body);
};
