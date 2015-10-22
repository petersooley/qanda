var schema = require('../db/schema');
schema
  .teardown()
  .then(schema.setup)
  .then(function() {
    console.log('reset complete');
  });