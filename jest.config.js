module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      lines: 100,
    },
    './src/domains/classes': {
      functions: 100,
    },
  },
};
