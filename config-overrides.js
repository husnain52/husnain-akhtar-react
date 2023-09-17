module.exports = {
  paths: function (paths, env) {
    paths.appIndexJs = path.resolve(__dirname, 'src/client.js');
    paths.appSrc = path.resolve(__dirname, 'src');
    return paths;
  },
};
