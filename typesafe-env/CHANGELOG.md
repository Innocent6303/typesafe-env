# Changelog

### [1.1.0] - 2024-11-26

### Added

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/Innocent6303/typesafe-env)

    New listEnvironmentVariable() function: Provides users with the ability to list all environment variables loaded into the application.

    Support for Windows File Path Handling: Implemented solutions to handle file paths on Windows for the loadEnvironmentVariable() function.

    CLI Enhancements: Improved the CLI interface allowing users to list environment variables, filter by keyword, and specify different file paths.

### Changed

    Enhanced CLI Usage: Users can now invoke the list command through the CLI to list environment variables, and filter them using specific keywords.

    Refined Functionality: Major improvements to loadEnvironmentVariable() for better error handling, file path support, and performance improvements.

### Fixed

    Bug Fixes for Path Handling on Windows: Fixed issues with handling file paths on Windows, ensuring compatibility and avoiding errors.

    Improved CLI Integration: Resolved several issues with CLI integration for loading variables and passing commands.

### Documentation

    Enhanced Readme: Updated documentation to provide detailed usage examples for both CommonJS and ES6 module imports. Included instructions on how to use the listEnvironmentVariable() function in different scenarios.

    CLI Usage: Full section added to explain how users can use the CLI to list environment variables with custom paths and keywords.

    Detailed Examples for CommonJS and ES6: Clear examples showing how users can import and use the library in both CommonJS and ES6 environments.

### Example of Usage

CommonJS Usage

```typescript
// Import necessary modules
const { loadEnvironmentVariables } = require("ts-typesafe-env");
const path = require("path");
```

```typescript
const envfilepath = path.resolve(__dirname, "./config/.env");

// Load the environment variables
const newENV = loadEnvironmentVariables(envfilepath);
console.log(newENV); // Outputs the parsed environment variables
```

```typescript
try {
  const newENV = loadEnvironmentVariables(envfilepath);
  console.log(newENV); // Logs the entire `.env` object

  // Example: Access a string value
  const apiKey = TypeSafeEnv.getString("NEW_DB");
  console.log(apiKey); // Outputs the value of NEW_DB

  // Example: Access a number value
  const max_size = TypeSafeEnv.getNumber("MAX_SIZE");
  console.log(max_size); // Outputs the value of MAX_SIZE

  // Example: Access a boolean value
  const db_sessions = TypeSafeEnv.getBoolean("DB_SESSION_NEW");
  console.log(db_sessions); // Outputs the value of DB_SESSION_NEW
} catch (e) {
  console.error(e); // Logs any errors
}
```

ES6 Usage

```typescript
import { loadEnvironmentVariables } from "ts-typesafe-env";
```

```typescript
const __filename = fileUrlToPath(import.meta.url);

const __dirname = path.dirname(__filename);
```

```typescript
const envfilepath = path.resolve(__dirname, "./config/.env");

// Load the environment variables
const newENV = loadEnvironmentVariables(envfilepath);
console.log(newENV); // Outputs the parsed environment variables
```

CLI Usage
To list all environment variables:

```bash
$ npx Ts-Typesafeenv list
```

To list environment variables filtered by a keyword:

```bash
$ npx Ts-Typesafeenv list --keyword DATABASE

```

To specify a custom path for loading environment variables:

```bash
$ npx Ts-Typesafeenv list --keyword /custom/path/to/envfile
```

## Full Documentation Update

The following sections were added to the README for better clarity and usage guidance
CLI Commands

- `list`: Lists all environment variables loaded by the application.

- `list` --keyword [KEYWORD]: Filters the listed environment variables by the specified keyword.

- `list` --keyword [FILE_PATH]: Allows users to specify the path from which environment variables should be loaded.

#### Examples of Usage

The README now includes examples of how to use `Ts-Typesafeenv` in both CommonJS and ES6 modules, along with different CLI commands and their use cases.

#### Key Updates Recap:

- New Features: Added `listEnvironmentVariable()` for listing environment variables with keyword and path options.

- Fixes: Fixed Windows-specific file path handling and improved `CLI integration`.

- CLI Usability: Enhanced the CLI to support custom paths and `keyword ` filters for environment variables.

- Documentation: Improved `documentation` with examples of CommonJS, ES6, and CLI usage for various scenarios.

## How to Contribute:

If you have suggestions, issues, or would like to contribute, feel free to open a pull request or submit an issue on the [GitHub repository](https://github.com/Innocent6303/typesafe-env).

#
