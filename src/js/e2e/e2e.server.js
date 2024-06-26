/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../../../webpack.config');

const server = new WebpackDevServer(webpack(config), {});
server.listen(8080, 'localhost', (err) => {
  if (err) {
    return;
  }
  if (process.send) {
    process.send('ok');
  }
});