import "dotenv/config";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
export class TypeSafeEnv {
  static getString(key: string): string {
    const value = process.env[key];
    if (!value) {
      throw new Error(
        `Environment variable "${key}" is not definedReceived value:"${value}"`
      );
    }
    return value;
  }

  static getNumber(key: string): number {
    const value = process.env[key];
    const numberValue = Number(value);
    if (isNaN(numberValue)) {
      throw new Error(
        `Environment variable "${key}" is not a valid number .Received value:"${value}"`
      );
    }
    return numberValue;
  }

  static getBoolean(key: string): boolean {
    const value = process.env[key];
    if (value === "true") return true;
    if (value === "false") return false;
    throw new Error(
      `Environment variable "${key}" is not a valid booleanReceived value:"${value}"`
    );
  }
  // for Environment-specific Configuration(Development/Production)
  static getEnvSpecificConfig(key: string, env: string): string {
    const value = process.env[`${key}_${env.toUpperCase()}`];
    if (!value) {
      throw new Error(
        `Environment variable "${key}_${env}" is not defined Received value:"${value}"`
      );
    }
    return value;
  }

  //Load environment variables from a specified file
  static loadFromFile(filePath: string): void {
    if (!fs.existsSync(filePath)) {
      throw new Error(`file not found:${filePath}`);
    }

    dotenv.config({ path: filePath });
  }
}

/**
 * Function to validate environment variables.
 */
// export function validateEnvironment(requiredVars: string[]) {
//   requiredVars.forEach((key) => {
//     try {
//       let value: string | number | boolean | undefined;

//       // Check for different types of variables
//       value =
//         TypeSafeEnv.getString(key) ||
//         TypeSafeEnv.getNumber(key) ||
//         TypeSafeEnv.getBoolean(key);

//       // Check if value is valid
//       if (value !== undefined && value !== null && value !== "") {
//         console.log(`✔️ ${key} is valid: ${value} (type: ${typeof value})`);
//       } else {
//         console.error(`❌ ${key} is missing or invalid`);
//       }
//     } catch (err) {
//       console.error(`❌ ${key} is missing or invalid`);
//     }
//   });
// }
export function validateEnvironment(requiredVars: string[]) {
  requiredVars.forEach((key) => {
    try {
      // Attempt to get the value as a string
      const stringValue = TypeSafeEnv.getString(key);

      // Check if it's a valid number, and if so, parse it as a number
      const numberValue = stringValue ? Number(stringValue) : NaN;

      // If the value is a valid number or a string, treat it accordingly
      if (!isNaN(numberValue) && typeof numberValue === "number") {
        console.log(`✔️ ${key} is valid: ${numberValue} (type: number)`);
      } else if (
        stringValue !== undefined &&
        stringValue !== null &&
        stringValue !== ""
      ) {
        console.log(`✔️ ${key} is valid: ${stringValue} (type: string)`);
      } else {
        console.error(`❌ ${key} is missing or invalid`);
      }
    } catch (err: unknown) {
      console.error(`❌ ${key} is missing or invalid: ${err}`);
    }
  });
}

/**
 * Function to list environment variables containing a keyword.
 */

export function listEnvironmentVariables(keyword?: string): void {
  // Read and parse the .env file directly
  const envPath = path.resolve(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) {
    console.error("Error: .env file not found.");
    return;
  }

  const envVars = dotenv.parse(fs.readFileSync(envPath)); // Parses the .env file content

  // Filter variables based on the keyword
  const filteredVars = keyword
    ? Object.keys(envVars).filter((key) =>
        key.toLowerCase().includes(keyword.toLowerCase())
      )
    : Object.keys(envVars);

  if (filteredVars.length === 0) {
    console.log("No matching environment variables found.");
    return;
  }

  // Print the filtered variables
  filteredVars.forEach((key) => {
    console.log(`${key}=${envVars[key]}`);
  });
}

/**
 * Function to load environment variables from a file.
 */
export function loadEnvironmentVariables(
  filePath: string
): Record<string, string> | undefined {
  const envPath = path.resolve(process.cwd(), filePath);

  if (!fs.existsSync(envPath)) {
    console.error(`Error: .env file not found at ${envPath}`);
    return undefined;
  }

  try {
    const envVars = dotenv.parse(fs.readFileSync(envPath)); // Parses the .env file content
    Object.keys(envVars).forEach((key) => {
      process.env[key] = envVars[key]; // Set each variable to `process.env`
    });
    console.log(`✔️ Environment variables loaded from "${filePath}"`);
    return envVars; // Return the parsed environment variables
  } catch (error) {
    console.error(
      `Error loading environment variables from ${filePath}:`,
      error
    );
    return undefined;
  }
}
