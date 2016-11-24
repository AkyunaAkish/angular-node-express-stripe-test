require('dotenv').config();

const knex = require('../../../db_config/knex.js');

exports.add = (req, res, next) => {
  knex('invoices')
  .insert({
    first_name: req.body.first_name.toLowerCase(),
    last_name: req.body.last_name.toLowerCase(),
    amount: req.body.amount
  })
  .returning('*')
  .then((invoice) => {
    console.log('IN THEN', invoice);
    res.json(invoice);
  })
  .catch((err) => {
    console.log('ERROR IN SUBMIT NEW INVOICE SERVER COMPONENT:', err);
    res.json(err);
  });
};
