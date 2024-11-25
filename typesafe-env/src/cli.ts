#!/usr/bin/env node

import { program } from "commander";
// import { TypeSafeEnv } from "./index.js";
import "dotenv/config";
import {
  validateEnvironment,
  listEnvironmentVariables,
  loadEnvironmentVariables,
} from "./index.js";
// Define the 'validate' command to validate required environment variables
program
  .command("validate") // Command to run validation
  .description("Validate required environment variables")
  .option(
    "-v, --vars <vars...>",
    "List of environment variables to validate",
    (value) => value.split(",")
  )
  .action((options) => {
    const varsToValidate = options.vars || ["DB_URL", "API_KEY"]; // Default to DB_URL, API_KEY if no args provided
    console.log("Validating environment variables:", varsToValidate);
    validateEnvironment(varsToValidate);
  });

// Define the 'list' command to list environment variables by a keyword

program
  .command("list [keyword] [filePath]") // Declare the 'list' command and accept an optional 'keyword' argument
  .description("List environment variables by keyword")

  .action((filePath, keyword) => {
    listEnvironmentVariables(filePath, keyword);
  });

// Define the 'load' command to load environment variables from a file
program
  .command("load <file>")
  .description("Load environment variables from a file ")
  .action(async (file: string) => {
    try {
      await loadEnvironmentVariables(file);
    } catch (err) {
      console.log("Error loading environment variables:", err);
    }
  });

program.parse(process.argv);
