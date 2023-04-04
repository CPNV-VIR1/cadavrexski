# cadavreXski

## Description

cadavreXski is a WebApp inspired on an old French game called [_cadavre exquis_](https://en.wikipedia.org/wiki/Exquisite_corpse).

The game consists in having several people compose a sentence, or a drawing, without any of them being able to take into account the previous collaboration or collaborations.

*This project was made during our RIA course (Rich Internet Application).*

## Dependencies & Configuration
We have used several dependencies to build our project.

* ejs 3.1.9
* express 4.18.2
* test 3.3.0

### Developpment dependencies

* jest 29.5.0
* supertest 6.3.3

To install all dependencies, run this command.
```
$ npm install 
``` 

## How to run the app 
After installing all dependencies, run the app in local
```
node app.js
``` 

## How to run the tests
```
npm run test
``` 


## How to contribute ?
To contribute to our project, fork the projet, create a new branch from develop to implement your feature.
Finally when your feature is ready, create a pull request.

## Structure of code
```
.
├── LICENSE
├── README.md
├── app.js
├── assets
│   ├── css
│   │   └── stylesheet.css
│   ├── js
│   │   └── cadavreXski.js
│   └── lang
│       ├── de.json
│       ├── en.json
│       └── fr.json
├── controllers
│   └── phrases.controller.js
├── docs
│   ├── PV_16-03-2023.md
│   └── PV_30-03-2023.md
├── package-lock.json
├── package.json
├── routes
│   ├── index.js
│   └── phrases.routes.js
├── test
│   └── phrase.controller.test.js
└── views
    └── phrases
        └── index.ejs
        
```

## Authors

 <a href="https://github.com/CPNV-RIA1/cadavrexski/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=CPNV-RIA1/cadavrexski" />
</a>

Made with [contrib.rocks](https://contrib.rocks).
