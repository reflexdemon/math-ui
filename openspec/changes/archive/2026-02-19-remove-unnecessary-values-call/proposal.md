## Why

The `SimpleMathView.vue` component uses an unnecessary `.values()` call when iterating over the config array in the template. This is redundant since Vue's v-for directive already iterates over array values directly, and adds confusion for developers reading the code.

## What Changes

- Remove the `.values()` call from line 138 in `SimpleMathView.vue`

## Capabilities

### New Capabilities

- `remove-values-call`: Remove unnecessary `.values()` call from array iteration in template

### Modified Capabilities

<!-- None for this simple fix -->

## Impact

- `src/views/SimpleMathView.vue`: Line 138 - remove `.values()` call
