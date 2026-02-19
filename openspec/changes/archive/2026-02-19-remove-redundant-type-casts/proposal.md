## Why

The `MathComponent.vue` component uses redundant `as DisplayConfig` type casts in an already-typed array declaration. This adds unnecessary verbosity and suggests the developer may not have trusted TypeScript's type inference.

## What Changes

- Remove redundant `as DisplayConfig` casts from lines 14, 20, 26, 32 in `MathComponent.vue`
- Review line 39 cast - may need a fallback instead of a cast

## Capabilities

### New Capabilities

- `remove-type-casts`: Remove unnecessary type casts from typed array

### Modified Capabilities

<!-- None for this simple fix -->

## Impact

- `src/components/MathComponent.vue`: Lines 14, 20, 26, 32 (and possibly 39)
