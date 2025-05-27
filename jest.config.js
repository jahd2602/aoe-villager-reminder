const path = require('path');

module.exports = {
  // Attempt to resolve paths directly
  testEnvironment: require.resolve('jest-environment-puppeteer'),
  globalSetup: require.resolve('jest-environment-puppeteer/setup'),
  globalTeardown: require.resolve('jest-environment-puppeteer/teardown'),
  setupFilesAfterEnv: [require.resolve('expect-puppeteer')], // Also resolve this
  testMatch: ['**/tests/e2e/**/*.spec.js'],
  transform: {
    '^.+\\.jsx?$': require.resolve('babel-jest'), // And this
  },
  // Explicitly tell Jest where to look for modules, just in case
  moduleDirectories: ['node_modules', 'src'], // 'src' is just an example, 'node_modules' is key
};
