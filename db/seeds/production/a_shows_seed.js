// File and its directory generated with
// $ knex seed:make shows_seed --env development.
// knex knows to put it in the db folder (?)

// Then seeded the db with
// $ knex seed:run --env development

exports.seed = function(knex, Promise) {
  return knex('shows').del() // Deletes ALL existing entries
    .then(function () { // Inserts seed entries one by one in series
      return Promise.all([
        // Inserts seed entries b-plate had id, tut doesn't??
        knex('shows').insert({
          name: 'Mr. Robot',
          channel: 'USA Network',
          genre: 'drama',
          inProduction: true
        }),
        knex('shows').insert({
          name: 'The IT Crowd',
          channel: 'Netflix',
          genre: 'comedy',
          inProduction: false
        }),
        knex('shows').insert({
          name: 'Game of Thrones',
          channel: 'HBO',
          genre: 'drama',
          inProduction: true
        }),
        knex('shows').insert({
          name: 'Mad Men',
          channel: 'AMC',
          genre: 'drama',
          inProduction: false
        }),
        knex('shows').insert({
          name: 'Better Call Saul',
          channel: 'AMC',
          genre: 'dramedy',
          inProduction: true
        }),
        knex('shows').insert({
          name: 'Cheers',
          channel: 'NBC',
          genre: 'comedy',
          inProduction: false
        }),
        knex('shows').insert({
          name: 'Bob\'s Burgers',
          channel: 'Fox',
          genre: 'animation',
          inProduction: true
        }),
        knex('shows').insert({
          name: 'Stranger Things',
          channel: 'Netflix',
          genre: 'drama',
          inProduction: true
        })
      ]);
    });
};
