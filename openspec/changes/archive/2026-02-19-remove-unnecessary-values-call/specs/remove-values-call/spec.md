## ADDED Requirements

### Requirement: Template iteration does not use .values()

The SimpleMathView component SHALL iterate over the config array without using the redundant .values() method call.

#### Scenario: Config array renders correctly

- **WHEN** the SimpleMathView template renders with a config array
- **THEN** each MathComponent receives the correct config values via v-for iteration
- **AND** the iteration works identically with or without .values()
