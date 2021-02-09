module.exports = {
  presets: [
    // '@vue/cli-plugin-babel/preset',
    // Babel Polyfills
    // https://cli.vuejs.org/guide/browser-compatibility.html
    [
      '@vue/app', {
        useBuiltIns: 'entry',
        // corejs: {
        //   version: 3,
        //   proposals: true,
        // },
      },
    ],
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'es',
        style: 'css',
      },
    ], // `style: true` 会加载 less 文件
  ],

};