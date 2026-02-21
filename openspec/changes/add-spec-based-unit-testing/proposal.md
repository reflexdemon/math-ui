## Why

The project lacks automated unit testing, making it difficult to verify correctness of new features and prevent regressions. With 12 existing specs in `openspec/specs/`, we need a systematic testing approach that validates each capability's implementation.

## What Changes

- Add Vitest as the testing framework with React Testing Library
- Create a test structure based on the existing spec subfolders
- Configure `npm run test` command to run all tests
- Add code coverage reporting via `npm run test` with --coverage flag
- Create test files for each spec that has implementation code

## Capabilities

### New Capabilities

- `spec-based-unit-testing`: Framework and configuration for writing and running unit tests based on specs in `openspec/specs/`

### Modified Capabilities

- None - this is a new capability

## Impact

- New dependencies: vitest, @testing-library/react, @testing-library/jest-dom, jsdom
- New files: `vitest.config.ts`, `src/**/*.test.tsx`, `src/**/*.test.ts`
- Scripts added to package.json: `test`, `test:coverage`
