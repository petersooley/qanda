require('../db/schema')
  .teardown().then(function() {
    console.log('done tearing down');
  });