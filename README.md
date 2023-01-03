## A simple JavaScript starter project using Jest for module testing.



After cloning the repository, run the following commands in order:

`npm install`
- This installs the packages listed in the `package.json` file.

`npm test`
- This runs the tests, using the *Jest* testing library.

`npm start`
- This runs the *live-server* web server, allowing you to interact with the module's functionality via a simple front-end interface.
- Usually this will automatically open a new tab in your default web browser, but if this doesn't seem to work for you, look for the URL in the terminal output and navigate there manually (it will look something like http://127.0.0.1:8080 ).
- Note that you can also run `npm test && npm start` which will first run the tests and then run the web server only if there are no failing tests.