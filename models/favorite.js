'use strict';

const { bookshelf } = require('../db/database');
require('./show');

const Favorite = bookshelf.Model.extend({
  tableName: 'favorites',
  show: function() { return this.belongsTo(Show) }
}, {
  getAll: function() {
    return this.forge()
    .fetchAll()
    .then( (rows) => {
      return rows
    })
    .catch( (error) => {
      return error
    });
  }
});

module.exports = bookshelf.model('Favorite', Favorite);
