require('dotenv').config();

const knex = require('../../../db_config/knex.js');

exports.purchase = (req, res, next) => {
  res.json(req.body);
};
