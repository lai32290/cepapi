'use strict';

const express = require('express')
    , router = express.Router()
    , Organism = require('./organisms/cep')

    , Find = require('./find')(Organism)
;

router.get('/', Find);

module.exports = router;