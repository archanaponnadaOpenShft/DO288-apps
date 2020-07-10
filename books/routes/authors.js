const express = require('express');

const router = express.Router();

const authors = require('../data/authors');

// ct  t = 'test';

/* GET ut yuers listing. */
router.get('/', (req, res) => {
  res.json(authors);
});

module.exports = router;
