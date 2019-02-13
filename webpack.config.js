const path = require('path');

const clientConfig = {
  target: 'web', // <=== can be omitted as default is 'web'
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
}
};

module.exports = [ clientConfig ];