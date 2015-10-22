# Q and A

### How to do things

1. clone repo
1. cd into `qanda`
1. `npm install`
1. `cp .env.sample .env` and then set your MySQL settings in `.env`
1. `npm run up`
1. _optional:_ `npm run seed`
1. `npm start`
1. [add questions](http://localhost:3000/admin)
1. [answer questions](http://localhost:3000)


### Should Happen

* allow admin to edit questions/answers
* implement some authentication of the admin interface
* move logic out of routes and into controllers
* add webpack to handle frontend assets
* clean up the migrations

### IE Support

IE 9+