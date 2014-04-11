# Angular Express Bootstrap Checkbook App

The code was started with a seed app from https://github.com/jimakker/angular-express-bootstrap-seed.

## How to use angular-express-seed

Clone the angular-express-seed repository, run `npm install` to grab the dependencies. 

### Running the app

Runs like a typical express app:

    node app.js

## Directory Layout
    
    app.js                --> app config
    angular-unit-test/    --> Jasmine client-side tests
      tests/            
        lib/
          jasmine-2.0.0
        spec/
          hello.js
          ToWordsSpec.js  --> Tests for AngularJS filter: toWords
    package.json          --> for npm
    public/               --> all of the files to be used in on the client side
      bootstrap/          --> all bootstrap files
        css/
        img/
        js/
      css/                --> css files
        app.css           --> default stylesheet
      img/                --> image files
      js/                 --> javascript files
        app.js            --> declare top-level app module
        controllers.js    --> application controllers
        directives.js     --> custom angular directives
        filters.js        --> custom angular filters
        services.js       --> custom angular services
        lib/              --> angular and 3rd party JavaScript libraries
          angular/
            angular.js            --> the latest angular js
            angular.min.js        --> the latest minified angular js
            angular-*.js          --> angular add-on modules
            version.txt           --> version number
    routes/
      api.js            --> route for serving JSON
      index.js          --> route for serving HTML pages and partials
    views/
      index.jade        --> main page for app
      layout.jade       --> doctype, title, head boilerplate
      partials/         --> angular view partials (partial jade templates)
        partial1.jade
        partial2.jade



## Example App

A simple [blog](https://github.com/btford/angular-express-blog) based on this seed.


## Contact

For more information on AngularJS please check out http://angularjs.org/
For more on Express and Jade, http://expressjs.com/ and http://jade-lang.com/ are your friends.
