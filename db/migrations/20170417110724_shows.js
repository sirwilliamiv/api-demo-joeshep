
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shows', function(table){
    table.increments();
    table.string('name').notNullable().unique();
    table.string('channel').notNullable();
    table.string('genre').notNullable();
    table.boolean('inProduction').notNullable();
  })
  .createTable('favorites', function(table) {
    table.increments();
    table.timestamp('datAdded').notNullable().defaultTo(knex.fn.now());
    table.integer('show_id').unsigned().references('shows.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.dropTable('shows').dropTable('favorites');
};
