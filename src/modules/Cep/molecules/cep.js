'use strict';

const mongoose = require('mongoose')
    , Schema   = mongoose.Schema
    , Molecule = {
          cidade: require('../atoms/cidade')
          , bairro: require('../atoms/bairro')
          , cep: require('../atoms/cep')
          , estado: require('../atoms/estado')
          , sigla: require('../atoms/sigla')
      }
    ;
module.exports = new Schema(Molecule);