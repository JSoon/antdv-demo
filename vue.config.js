const { NODE_ENV } = process.env;
const isProd = NODE_ENV === 'production';

module.exports = {
  lintOnSave: false,
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      css: {
        // Note: the following config format is different between Vue CLI v4 and v3
        // For Vue CLI v3 users, please refer to css-loader v1 documentations
        // https://github.com/webpack-contrib/css-loader/tree/v1.0.1
        modules: {
          // https://github.com/webpack-contrib/css-loader#localidentname
          localIdentName: isProd ? '[hash:base64:5]' : '[path][name]__[local]',
        },
        localsConvention: 'camelCaseOnly',
      },
    },
  },
};
