# AGENTS.md

## Build, Lint, and Test Commands

### Development

- `npm run dev` - Start the development server
- `npm run build` - Build for production (includes type-check)
- `npm run preview` - Preview the production build

### Type Checking

- `npm run type-check` - Run TypeScript type checking with vue-tsc

### Linting & Formatting

- `npm run lint` - Run ESLint with auto-fix (fixes and caches)
- `npm run format` - Format source files with Prettier

### Testing

- `npm run test` - Run all tests with Vitest (watch mode by default)
- `npm run test -- --run` - Run tests once (no watch mode)
- `npm run test -- --run src/services/Multiplication.test.ts` - Run a single test file
- `npm run test -- --run -t "should generate"` - Run tests matching a pattern
- `npm run test:coverage` - Run tests with coverage report

---

## Code Style Guidelines

### General Conventions

- **Language**: TypeScript (`.ts`, `.tsx`) and Vue 3 with Composition API
- **Module System**: ES modules (ESM)
- **Node Version**: ^20.19.0 or >=22.12.0
- **Package Manager**: npm

### Formatting

- Use **Prettier** for code formatting (configured in `.prettierrc.json`)
- Settings: no semicolons, single quotes, 100 character line width
- Run `npm run format` before committing (formats `src/` only)
- Run `npm run lint` to catch formatting and style issues

### TypeScript

- **Always use explicit types** for function parameters and return types
- Use `import type` for type-only imports (e.g., `import type { MathType } from '@/types/MathType.ts'`)
- Use TypeScript interfaces for object shapes (e.g., `Problem`, `TableGroup`)
- Enable `strict: true` in tsconfig (inherited from @vue/tsconfig)

### Imports

- Use **path aliases**: `@/` maps to `src/`
- Order imports logically:
    1. Vue/Vue Router core (`vue`)
    2. External libraries (`primevue`, `lodash`)
    3. Internal services (`@/services/`)
    4. Internal components (`@/components/`)
    5. Internal types (`@/types/`)
- Example:
  ```ts
  import { ref, computed } from 'vue'
  import { Button } from 'primevue'
  import _ from 'lodash'
  import { multiplication } from '@/services/SimpleMathProblem.ts'
  import AppTopbar from '@/components/AppTopbar.vue'
  import type { MathConfig } from '@/types/MathConfig.ts'
  ```

### Naming Conventions

- **Files**: kebab-case (e.g., `multiplication-problem.ts`, `simple-math-view.vue`)
- **Components**: PascalCase (e.g., `AppTopbar.vue`, `MathComponent.vue`)
- **Functions**: camelCase (e.g., `multiplication()`, `generateProblems()`)
- **Interfaces/Types**: PascalCase (e.g., `MathType`, `Problem`)
- **Constants**: camelCase or UPPER_SNAKE_CASE for true constants

### Vue Components

- Use **Composition API** with `<script setup lang="ts">`
- Use `defineProps` and `defineEmits` with type-based syntax
- Use `v-model` for two-way binding
- Template sections order: `script setup` → `template` → `style scoped`
- Group related components in directories (e.g., `views/worksheets/`)

### Error Handling

- Use early returns for error conditions
- Validate inputs at function boundaries
- Use meaningful error messages
- Handle null/undefined explicitly (use `null` rather than `undefined` for optional values)

### Testing

- Test files: `{filename}.test.ts` or `{filename}.spec.ts` alongside source
- Use **Vitest** with **Vue Test Utils** and **@testing-library/jest-dom**
- Use `describe` and `it` blocks (Vitest API)
- Test patterns:
    - Happy path tests
    - Edge cases (empty input, boundary values)
    - Error conditions
- Example:

  ```ts
  import { describe, it, expect } from 'vitest'
  import { multiplication } from './Multiplication'

  describe('Multiplication', () => {
    it('should generate the specified number of problems', () => {
      const result = multiplication(5, 1, 10)
      expect(result).toHaveLength(5)
    })
  })
  ```

### CSS & Styling

- Use **Tailwind CSS v4** with PrimeVue integration
- Use scoped styles (`<style scoped>`) in Vue components
- Follow BEM-like naming for custom CSS classes when needed
- Use PrimeVue design tokens (e.g., `var(--p-surface-100)`)

### Project Structure

```
src/
├── components/       # Reusable Vue components
│   └── icons/       # Icon components
├── composables/     # Vue composables (useXxx)
├── router/          # Vue Router configuration
├── services/        # Business logic (pure TypeScript)
├── types/           # TypeScript type definitions
├── views/           # Page-level components
│   └── worksheets/ # Worksheet-specific views
├── App.vue          # Root component
└── main.ts          # Entry point
```

### Common Patterns

- **Service layer**: Business logic in `src/services/` as pure functions
- **Types**: Centralized in `src/types/`
- **Components**: Dumb/presentational components; complex logic in composables or services

### Useful Commands

- `npm run build-only` - Just Vite build (no type-check)
- `npm run deploy` - Build and deploy to GitHub Pages

---

## IDE Setup

- Use VS Code with **Volar** extension for Vue support
- Enable "Take Over Mode" for TypeScript in Vue files
- ESLint and Prettier extensions recommended for auto-formatting on save

### Additional Notes

- All new features added should have test coverage
- For any bug fixes, first reproduce the error and then fix it
- Regularly review and refactor code to improve maintainability
- Always ensure all tests pass before committing changes
