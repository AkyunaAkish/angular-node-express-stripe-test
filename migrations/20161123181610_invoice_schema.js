exports.up = (knex, Promise) => {
  return knex.schema.createTable('invoices', (table) => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.decimal('amount').notNullable();
    table.bigInteger('created_at').notNullable().defaultTo(Date.now());
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('invoices');
};
