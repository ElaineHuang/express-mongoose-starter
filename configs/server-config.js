const ip = require('ip');

// ip address for development server.
const devServerIP = ip.address();

// port for development server.
const devServerPort = 8080;
const nodeServerPort = 3000;

module.exports = {
  devServerIP,
  devServerPort,
  nodeServerPort,
  devServerAddress: `http://${devServerIP}:${devServerPort}`,
  nodeDevAddress: `http://${devServerIP}:${nodeServerPort}`,
};
