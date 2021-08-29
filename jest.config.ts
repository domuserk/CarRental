import { pathsToModuleNameMapper } from 'ts-jest/utils';
import { compilerOptions } from './tsconfig.json';

module.exports = {
  // automock: false,
   bail: true,
  // browser: false,
  // cache: true,
  // cacheDirectory: "/var/folders/tz/39sb86z96tj_2cqqkm1kfkh9bwd75d/T/jest_ocrnot",
  // changedFilesWithAncestor: false,
  clearMocks: true,
  // coveragePathIgnorePatterns: [
  //   "/node_modules/"
  // ],
  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],
  // detectLeaks: false,
  // detectOpenHandles: false,
  // errorOnDeprecated: false,
  // expand: false,
  // filter: null,
  // forceCoverageMatch: [],
  // globalSetup: null,
  // globalTeardown: null,
  globals: {
    "ts-jest": {
      "tsConfigFile": "tsconfig.json"
    }
  },
  // haste: {
  //   "providesModuleNodeModules": []
  // },
  // moduleDirectories: [
  //   "node_modules"
  // ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
   moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix : '<rootDir/src/>'
   }),
  // modulePathIgnorePatterns: [],
  // noStackTrace: false,
  // notify: false,
  // notifyMode: "always",
   preset: "ts-jest",
  // resetMocks: false,
  // resetModules: false,
  // restoreMocks: false,
  // runTestsByPath: false,
  // runner: "jest-runner",
  // skipFilter: false,
  // snapshotSerializers: [],
  testEnvironment: "node",
  // testEnvironmentOptions: {},
  // testFailureExitCode: 1,
  // testLocationInResults: false,
  testMatch: [
    "**/*.spec.ts"
  ],
  // testPathIgnorePatterns: [
  //   "/node_modules/"
  // ],
  // testRegex: "",
  // testResultsProcessor: null,
  // testURL: "about:blank",
  // timers: "real",
  // transformIgnorePatterns: [
  //   "/node_modules/"
  // ],
  // useStderr: false,
  // verbose: null,
  // watch: false,
  // watchPathIgnorePatterns: [],
  // watchman: true,
};