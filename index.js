// Libs
const Cfenv = require('cfenv');
const Ghost = require('ghost');
const Path = require('path');

// Setup Configuration
const config = {
  config: Path.join(__dirname, 'config.js')
}

// Start Ghost
Ghost(config).then(function (ghostServer) {
    ghostServer.start();
});

// Deployment Tracking
require("cf-deployment-tracker-client").track();
