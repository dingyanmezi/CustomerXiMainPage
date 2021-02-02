/* config-overrides.js */
const { override, addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({
    // If you are using less-loader@5 or older version, please spread the lessOptions to options directly.
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { '@base-color': 'springgreen', '@reset-import': false, "@nav-item-font-default-color": 'black', "@nav-item-active-font-color": 'black', "@nav-item-font-size": '15px' }
    }
  })
);