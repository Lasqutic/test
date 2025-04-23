# Node.js Input Validation with Tests

This project provides simple input validation functions and unit tests using **Node.js** and **Jest**.

## Overview

We implemented two core validation functions:
- `validate`
- `validateFields`

Tests were written to ensure correctness and to meet code coverage requirements.

## Features

-  Validates nested and flat payloads
-  Throws errors for unknown fields
-  Supports recursion in nested structures
- >85% test coverage achieved

## Running the Project

### 1. Install Dependencies
Use `npm ci` to install exact versions from lock file:
```bash
npm ci
```

### 2. Run Tests
```bash
npm test
```

### 3. Run with Coverage
```bash
npm run test:coverage
```

### Example Output
```
> test@1.0.0 test:coverage
> jest --coverage

 PASS  tests/validate.test.js
  validate
    ✓ should pass with valid payload (3 ms)
    ✓ should throw if payload is not an object (10 ms)
    ✓ should throw if payload have required field name (1 ms)
    ✓ should throw if payload.name is empty (1 ms)
    ✓ should throw if payload dont have required field email (1 ms)
    ✓ should throw if payload.email is empty  (1 ms)
    ✓ should throw if payload.email !== "string" (1 ms)
    ✓ should throw if payload.password not exist (1 ms)
    ✓ should throw if payload.password is empty string (1 ms)
    ✓ should throw if payload.email is empty  (1 ms)
  validateFields
    ✓ should pass with only allowed fields (1 ms)
    ✓ should throw with disallowed top-level field (1 ms)
    ✓ should throw with disallowed nested field
    ✓ should allow empty object
    ✓ should handle mixed allowed and disallowed fields (1 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |   94.44 |    92.85 |     100 |   94.11 | 
 index.js |   94.44 |    92.85 |     100 |   94.11 | 20,68
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       15 passed, 15 total
Snapshots:   0 total
Time:        0.606 s, estimated 1 s
```

## Project Structure
```
.
├── src/
│   └── index.js             # Validation logic
├── tests/
│   ├── validate.test.js     # Tests for validate
│   └── validateFields.test.js # Tests for validateFields
├── package.json
└── README.md
```