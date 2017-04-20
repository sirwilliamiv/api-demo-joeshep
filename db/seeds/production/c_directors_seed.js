exports.seed = function(knex, Promise) {
  return knex('directors').del() // Deletes ALL existing entries
    .then(function () { // Inserts seed entries one by one in series
      return Promise.all([
        // Inserts seed entries b-plate had id, tut doesn't??
        knex('directors').insert({
          name: 'Jimmy Pesto',
          gender: 'male',
          birthYear: 1947,
          twitterHandle: '@JamesPestoDirex'
        }),
        knex('directors').insert({
          name: 'Linda LaVida',
          gender: 'female',
          birthYear: 1978,
          twitterHandle: '@LaVida_loca'
        }),
        knex('directors').insert({
          name: 'Star Sneetch',
          gender: 'binary',
          birthYear: 1993,
          twitterHandle: '@sneetchbelly'
        }),
        knex('directors').insert({
          name: 'David Duchovny',
          gender: 'male',
          birthYear: 1962,
          twitterHandle: '@iwanttodirect'
        }),
        knex('directors').insert({
          name: 'Maggie Simpson',
          gender: 'female',
          birthYear: 1988,
          twitterHandle: '@permababy88'
        }),
        knex('directors').insert({
          name: 'Gort McGoo',
          gender: 'male',
          birthYear: 1939,
          twitterHandle: '@tooldfortwitter'
        }),
        knex('directors').insert({
          name: 'Garth Hairpin',
          gender: 'male',
          birthYear: 1974,
          twitterHandle: '@actiongarth'
        }),
        knex('directors').insert({
          name: 'Della Ware',
          gender: 'female',
          birthYear: 1980,
          twitterHandle: '@dellacallstheshots'
        })
      ]);
    });
};
