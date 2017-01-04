// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

// Load local ENV
require('dotenv').load({ silent: true });

// Libs
const Cfenv = require('cfenv');
const Url = require('url');

// Setup
const appEnv = Cfenv.getAppEnv();
const mysqlConfig = appEnv.getServiceCreds('GhostDatabase');
const mysqlURL = Url.parse(mysqlConfig.uri)
const mysqlAuth = mysqlURL.auth.split(':');
const mysqlDB = process.env.DATABASE || mysqlURL.path.substr(1);

var config;

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment.
    // Configure your URL and mail settings here
    production: {
        url: appEnv.url,
        mail: {},
        database: {
            client: 'mysql',
            pool: {
              min: 2,
              max: 10,
              ping: function (conn, cb) { conn.query('SELECT 1', cb); }
            },
            connection: {
                host     : mysqlURL.hostname,
                port     : mysqlURL.port,
                user     : mysqlAuth[0],
                password : mysqlAuth[1],
                database : mysqlDB,
                charset  : 'utf8',
                ssl  : {
                    ca : new Buffer(mysqlConfig.ca_certificate_base64, 'base64').toString('utf8')
                }
            },
            debug: true
        },
        server: {
            host: appEnv.bind,
            port: appEnv.port,
        },
    },
    // ### development
    development: {
        url: appEnv.url,
        mail: {},
        database: {
            client: 'mysql',
            pool: {
              min: 2,
              max: 10,
              ping: function (conn, cb) { conn.query('SELECT 1', cb); }
            },
            connection: {
                host     : mysqlURL.hostname,
                port     : mysqlURL.port,
                user     : mysqlAuth[0],
                password : mysqlAuth[1],
                database : mysqlDB + '-dev',
                charset  : 'utf8',
                ssl  : {
                    ca : new Buffer(mysqlConfig.ca_certificate_base64, 'base64').toString('utf8')
                }
            },
            debug: true
        },
        server: {
            host: appEnv.bind,
            port: appEnv.port,
        },
    },
};

module.exports = config;
