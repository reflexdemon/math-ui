## Context

The SimpleMathView.vue component iterates over a config array in its template. The current code uses `.values()` which is unnecessary.

## Goals / Non-Goals

**Goals:**

- Remove the unnecessary `.values()` call from line 138
- Ensure the component continues to render MathComponents correctly

**Non-Goals:**

- No refactoring of other template code
- No changes to the config structure or data

## Decisions

### Decision 1: Remove .values() call

**Approach**: Simply remove `.values()` from `config.values()` making it just `config`.

**Rationale**: In JavaScript, arrays already have an iterator that yields values when used in a for-of loop or forEach. Vue's v-for uses this iterator internally, so `.values()` produces identical behavior but adds cognitive overhead.

**Alternative considered**: None—this is a trivial one-line fix.

## Risks / Trade-offs

No significant risks. The change is functionally identical.
