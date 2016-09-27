'use strict';

const mongoose = require('mongoose')
    , Organism = mongoose.model('User')

    , find = require('./organelles/find')(Organism)

    , Cell = {
        find
      }
    ;

module.exports = Cell;