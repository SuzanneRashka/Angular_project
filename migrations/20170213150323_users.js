exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('uid').primary();
    table.string('first')
            .notNullable();
    table.string('last')
            .notNullable();
    table.string('email')
            .unique()
            .notNullable();
    table.string('password')
            .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
