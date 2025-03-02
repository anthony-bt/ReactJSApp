module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    browsers: [
      'chrome',
      'firefox',
      'safari'
    ]
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};