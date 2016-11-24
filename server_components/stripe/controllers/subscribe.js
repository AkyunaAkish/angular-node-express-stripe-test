require('dotenv').config();

const knex = require('../../../db_config/knex.js');

exports.subscribe = (req, res, next) => {
  res.json(req.body);
};
