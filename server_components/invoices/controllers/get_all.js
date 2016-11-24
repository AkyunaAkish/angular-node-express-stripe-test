require('dotenv').config();

const knex = require('../../../db_config/knex.js');

exports.getAll = (req, res, next) => {
  knex('invoices')
  .then((invoices) => {
    res.json(invoices);
  })
  .catch((err) => {
    console.log('ERROR IN GET ALL INVOICES SERVER COMPONENT:', err);
    res.json(err);
  });
};
