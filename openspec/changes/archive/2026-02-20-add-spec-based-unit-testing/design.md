## Context

The math-ui project has 12 specs in `openspec/specs/` but lacks automated testing. This limits our ability to verify implementations and catch regressions. We need a standardized testing approach that aligns with the spec-driven workflow.

## Goals / Non-Goals

**Goals:**

- Add Vitest as the testing framework (modern, fast, compatible with Vite)
- Support testing React components with React Testing Library
- Run tests via `npm run test` command
- Generate code coverage reports
- Create a testing structure that maps to spec subfolders

**Non-Goals:**

- End-to-end testing (separate concern)
- Visual regression testing
- Testing third-party libraries or node_modules

## Decisions

1. **Vitest over Jest**: Vitest is Vite-native, faster startup, and has excellent TypeScript support out of the box.

2. **React Testing Library over Enzyme**: RTL encourages better testing practices (user-centric) and is the modern standard for React testing.

3. **jsdom environment**: Using jsdom for browser API simulation without needing a full browser.

4. **Test file location**: `src/**/*.test.tsx` and `src/**/*.test.ts` following standard React project conventions.

5. **Coverage tool**: Vitest built-in coverage with v8 provider (istanbul alternative).

## Risks / Trade-offs

- **Risk**: Some specs may not have testable code (pure UI layout)
  - **Mitigation**: Create tests only where there's meaningful logic to test
- **Risk**: Code coverage metrics can be gamed
  - **Mitigation**: Focus on meaningful tests, not just percentage

- **Trade-off**: Adding tests increases development time
  - **Mitigation**: Tests catch bugs early, reducing debug time overall
