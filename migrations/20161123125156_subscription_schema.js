exports.up = (knex, Promise) => {
  return knex.schema.createTable('subscriptions', (table) => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('frequency').notNullable();
    table.decimal('amount').notNullable();
    table.bigInteger('invoice_id').notNullable();
    table.string('stripe_id').notNullable();
    table.bigInteger('created_at').notNullable().defaultTo(Date.now());
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('subscriptions');
};
