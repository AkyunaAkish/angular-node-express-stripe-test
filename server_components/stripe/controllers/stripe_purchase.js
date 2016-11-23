require('dotenv').config();

const knex = require('../../../db_config/knex.js');

exports.stripePurchase = (req, res, next) => {
  res.json(req.body);
};
