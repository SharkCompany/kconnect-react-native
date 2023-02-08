module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        alias: {
          api: './src/api',
          assets: './src/assets',
          components: './src/components',
          constants: './src/constants',
          helpers: './src/helpers',
          models: './src/models',
          navigations: './src/navigations',
          store: './src/store',
          scenes: './src/scenes',
          utils: './src/utils',
        },
      },
    ],
  ],
};
