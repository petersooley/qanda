require('../db/schema')
  .setup().then(function() {
    console.log('done setting up');
  });