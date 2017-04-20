'use strict'

const { bookshelf } =require('../db/database');
require('./show');
require('./show_director');

const Director = bookshelf.Model.extend({
  tableName: 'directors',
  shows: function (){ return this.belongsToMany('Show').through('Show_Director')}
},{
   getAll: function() {
    console.log("Get all called from Director Model");
    return this.forge()
    .fetchAll()
    .then( (rows) => {
      return rows
    })
    .catch( (error) => {
      return error
    });
  }
})

module.exports = bookshelf.model('Director', Director)
