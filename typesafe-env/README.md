# **🌟 Ts-Typesafeenv** - Safe and Efficient Environment Variable Validation

![npm](https://img.shields.io/npm/v/ts-typesafe-env?style=flat-square) ![license](https://img.shields.io/badge/license-MIT-green?style=flat-square)

## **💡 Introduction**

Environment variables are crucial for managing configuration and sensitive data in modern applications. While `.env` files are useful, managing a growing list of variables in large projects can be challenging.

**Ts-Typesafeenvv** ensures your environment variables are **defined** and **validated** in a consistent, reliable way, reducing the risk of runtime errors.

---

## **🚀 Why Ts-Typesafeenv?**

Struggling with managing environment variables? Here's why **Ts-Typesafeenv** is your go-to solution:

✅ **Predefined Validation**: Validate with `getString`, `getNumber`, and `getBoolean`.  
✅ **Environment-Specific Config**: Handle different environments (production, development) effortlessly.  
✅ **Built-In Functions**: Quickly validate, list, and load variables with tools like `validateEnvironment`.  
✅ **CLI Support**: Manage environment variables right from the terminal.  
✅ **No Direct `process.env` Access**: Simplify access with intuitive methods.  
✅ **Flexible File Loading**: Load variables from specific `.env` files for added flexibility.

---

## **✨ Features**

```typescript
- **`TypeSafeEnv.getString(key: string)`**: Validates and retrieves a string variable.
- **`TypeSafeEnv.getNumber(key: string)`**: Ensures a number type and validates its presence.
- **`TypeSafeEnv.getBoolean(key: string)`**: Confirms a boolean value (`true` or `false`).
- **`TypeSafeEnv.loadFromFile(filePath: string)`**: Load environment variables from a specified `.env` file safely.
- **`TypeSafeEnv.getEnvSpecificConfig(key: string, type: string)`**: Fetch environment-specific values for flexible configurations.
- **`validateEnvironment(requiredVars: string[])`**: Validates multiple variables to prevent runtime errors.
- **`listEnvironmentVariables()`**: Lists all loaded environment variables.
```

---

## **📦 Installation**

Install Ts-Typesafeenv using **npm**:

```bash
npm install ts-typesafe-env
```

Or with **yarn**:

```bash
yarn add ts-typesafe-env
```

---

### ⚡ Usage

// Importing the Package

After installing the package, you can easily import it into your codebase using [`CommonJS`](#commonjs)?

```typescript
const { TypeSafeEnv } = require("ts-typesafe-env");
```

.. or Using[`ES6`](#ES6)?

```javascript
import { TypeSafeEnv } from "ts-typesafe-env";
```

# Validating Environment Variables

#### ✅ Use the **predefined methods** to validate your environment variables efficiently and reliably.

### Example: Checking for a String Value

```typescript
const dbUrl = TypeSafeEnv.getString("DB_URL");
console.log(dbUrl); // Your DB URL or an error if missing.
```

#### Example: Checking for a Number Value

```typescript
const port = TypeSafeEnv.getNumber("PORT");
console.log(port); // The port number or an error if invalid.
```

#### Example: Checking for a Boolean Value

```typescript
const isProd = TypeSafeEnv.getBoolean("IS_PROD");
console.log(isProd); // true/false or an error if invalid.
```

#### Managing Environment-Specific Configurations

```typescript
const apiEndpoint = TypeSafeEnv.getEnvSpecificConfig(
  "API_URL",
  process.env.NODE_ENV || "production"
);
console.log(apiEndpoint);
```

> This method ensures that the correct **environment variable** is used based on the **active environment**  
> _(i.e., `production` or `development`)_.

#

### Validating Multiple Environment Variables

```javascript
import { validateEnvironment } from "ts-typesafe-env";

TypeSafeEnv.validateEnvironment(["DB_URL", "API_KEY", "NEW_DB"]); //if any of the required variables are missing or invalid, the function will log an error to the console.
```

---

### 🚀 No More `process.env`

One of the biggest **benefits** of `TypeSafeEnv` is that you don’t have to manually access each environment variable using `process.env.xyz`.

> Instead, you can simply call the appropriate method for each type of variable, ensuring you get the value you need in a **reliable** and **consistent** way.

### 💡 Simplify Your Code with Typesafeenv

For example, instead of doing:

```javascript
const dbUrl = process.env.DB_URL;
if (!dbUrl) {
  throw new Error("DB_URL is missing");
}
```

You can simply use:

```typescript
const dbUrl = TypeSafeEnv.getString("DB_URL");
```

⚡ This eliminates the need for manual error handling and simplifies your code.
Say goodbye to repetitive checks and write cleaner, more reliable code with TypeSafeEnv!

## 🛠️ Command-Line Interface (CLI)

We also provide a **command-line interface (CLI)** to help you validate environment variables easily from the terminal.

#### 📋 Features:

- **Listing Environment Variables:**  
  Quickly list all the environment variables loaded from your `.env` file for easy inspection.

- **Validation Made Easy:**  
  Use the CLI to validate your required environment variables effortlessly, reducing the risk of configuration issues.

> _This eliminates the need for manual error handling and simplifies the code._  
> _No more worrying about missing or misconfigured variables!_

## **⚙️ CLI Tool**

### List All Environment Variables

```bash
npx typesafeenv list
```

```typescript
# Expected Output:
DB_URL=http://example.com
API_KEY=your-api-key
Condition=true
NEW_DB=Tested Database
DB_SESSION=my-session
DB_URL_development=localhost/dev_db
DB_URL_production=localhost/dev_PR
```

---

This command displays the current values of all environment variables accessible in your project. It allows you to verify that each variable is properly defined in your .env file or other configuration sources..

---

### List Environment Variables Using a Keyword

```bash
npx typesafeenv list "API_KEY"
```

```typescript
# Expected Output:
API_KEY=your-api-key
```

### List Environment Variables from Another File with a Keyword and Path

> Note: You can also provide a specific keyword for the search, and the result will display only the relevant variables.

```typescript
Example:
npx typesafeenv list "max_size" "./config/.env"
Output:max_size=12
```

```typescript
npx typesafeenv list "" "./config/.env"
# Expected Output:
NEW_DB_NAME=New Tested Database
DB_URL_NEW=https://localhost
max_size=12
DB_SESSION_NEW=true
```

### Validate Environment Variables

```bash
npx typesafeenv validate -v DB_URL API_KEY
# Or use the long-form option:
npx typesafeenv validate --vars DB_URL API_KEY

```

```typescript
# Expected Output:
Validating environment variables: [ 'DB_URL', 'API_KEY' ]
✔️ DB_URL is valid: http://example.com (type: string)
✔️ API_KEY is valid: your-api-key (type: string)
```

## 🔧 Advanced Configuration

You can customize **TypeSafeEnv** to suit the needs of your application. For example:

### 🌍 Dynamic Environment Handling

Instead of hardcoding the environment (e.g., production or development), you can dynamically get the current environment using `process.env.NODE_ENV`.

### 🌟 Example:

#

```typescript
const currentEnv = process.env.NODE_ENV || "production";
const configValue = TypeSafeEnv.getEnvSpecificConfig("API_KEY", currentEnv);
```

## 🚀 Load Environment Variables from External Files

### What this method does:

*Allows you to load `.env` files from different folders by providing their file paths.
*Stores the variables into an object for easy access.
*Enables you to retrieve and use environment variables directly in your code.
*Simplifies the process of managing environment variables in less than a minute.

### 🌟 Example: Using ES6

```typescript
import { loadEnvironmentVariables } from "ts-typesafe-env";
```

🔧 Define the Current Directory
Use the following to determine the directory and filename:

```typescript
const __filename = fileUrlToPath(import.meta.url);

const __dirname = path.dirname(__filename);
```

📁 Specify the Path to Your `.env` File
You can load a `.env` file from any folder with the file path:

```typescript
const envfilepath = path.resolve(__dirname, "./config/.env");

// Load the environment variables
const newENV = loadEnvironmentVariables(envfilepath);
console.log(newENV); // Outputs the parsed environment variables
```

🛠️ Apply Logic and Use Environment Variables
Access the loaded variables in your project like this:

```typescript
try {
  const newENV = loadEnvironmentVariables(envfilepath);
  console.log(newENV);// Logs the entire `.env` object

  const apiKey = TypeSafeEnv.getString("NEW_DB");
  console.log(apiKey);/ Outputs the value of NEW_DB

  const max_size = TypeSafeEnv.getNumber("MAX_SIZE");
  console.log(max_size); // Outputs the value of MAX_SIZE
  // Example: Get a boolean value
  const db_sessions = TypeSafeEnv.getBoolean("DB_SESSION_NEW");
  console.log(db_sessions);// Outputs the value of DB_SESSION_NEW
} catch (e) {
  console.error(e);// Logs any errors
}
```

### 🌟 Example: Using CommonJS

```typescript
// Import necessary modules
const { loadEnvironmentVariables } = require("ts-typesafe-env");
const path = require("path");
```

📁 Specify the Path to Your `.env` File
You can load a `.env` file from any folder with the file path:

```typescript
const envfilepath = path.resolve(__dirname, "./config/.env");

// Load the environment variables
const newENV = loadEnvironmentVariables(envfilepath);
console.log(newENV); // Outputs the parsed environment variables
```

🛠️ Apply Logic and Use Environment Variables
Access the loaded variables in your project like this:

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

### ✨ Highlights of This Method

- 🛡️ Flexible: Load .env files from any location.
- 🔒 Type-Safe: Use getString, getNumber, or getBoolean, Etc.. for reliable access.
- ⚡ Convenient: Quickly integrate and manage environment variables in your project.

## ✔️Handling File Paths in JavaScript/TypeScript (Windows)

When working with file paths in JavaScript or TypeScript, especially when dealing with `path.resolve`, it’s essential to handle Windows-style paths carefully. Here's how you can correctly handle the file path:

### Problem

⚠️ If youprovide a Windows path directly like this:

```typescript
const envFilePath = path.resolve(
  __dirname,
  "D:Program Files (x86)New folder.env"
);
//You might encounter issues because backslashes (\) are escape characters in strings.
```

💡Solution: Use Forward Slashes
Use forward slashes (/) instead of backslashes. Node.js automatically handles them correctly across platforms:

```typescript
const envFilePath = path.resolve(
  __dirname,
  "D:/Program Files (x86)/New folder/.env"
);

OR;
const folderPath = "D:/Program Files (x86)/New folder";
const envFilePath = path.resolve(__dirname, `${folderPath}/.env`);
```

### ⚙️ Custom Validation (For Contributors)

If the built-in validation methods don't meet your needs, **you can extend the package** by creating **custom validators** for more complex logic. This customization is intended for contributors who want to enhance the functionality of **Ts-Typesafeenv**.

#### Example of Adding a Custom Validator:

To add custom validation logic, you can extend the `TypeSafeEnv` class in your local development environment:

```js
// Custom Validator Example in the package code
class CustomValidator {
  static validateApiKey(apiKey) {
    if (!apiKey || apiKey.length !== 32) {
      throw new Error("Invalid API Key. It must be 32 characters long.");
    }
    return apiKey;
  }
}

// Usage within the package code
const apiKey = TypeSafeEnv.getString("API_KEY");
CustomValidator.validateApiKey(apiKey);
```

📜 License

This project is licensed under the MIT License - see the LICENSE file for details
🌐 [For More Information](https://github.com/Innocent6303/typesafe-env/blob/main/LICENSE)

Visit the [GitHub repository](https://github.com/Innocent6303/typesafe-env). for detailed documentation and contribution guidelines.

### **💬 Summary**

**Ts-Typesafeenvv** simplifies the process of validating environment variables, making it ideal for large-scale projects. By leveraging the built-in functions and CLI, developers can easily ensure their environment configuration is correct, minimizing the risk of runtime errors caused by missing or invalid variables.

With **Ts-Typesafeenv**, you no longer need to manually access `process.env` for every variable, which makes your code cleaner, more maintainable, and reliable.

> Say goodbye to the hassle of managing environment variables manually—**Ts-Typesafeenvv** does it all for you!

---

#

- **Easy to use**
- **Built-in validation functions**
- **CLI support for quick validation**
- **No more manual access to `process.env`**

#

---

#

### Made with ❤️ by **Abdul Mujeeb**

A passion project crafted with care to help developers manage environment variables with ease. Thank you for using **Ts-Typesafeenv**!

> "Code is like humor. When you have to explain it, it’s bad. " – **_A M_**

---

#
