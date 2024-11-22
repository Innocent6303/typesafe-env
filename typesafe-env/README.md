# **🌟 TypeSafeEnv** - Safe and Efficient Environment Variable Validation

![npm](https://img.shields.io/npm/v/ts-typesafe-env?style=flat-square) ![license](https://img.shields.io/badge/license-MIT-green?style=flat-square)

## **💡 Introduction**

Environment variables are crucial for managing configuration and sensitive data in modern applications. While `.env` files are useful, managing a growing list of variables in large projects can be challenging.

**TypeSafeEnv** ensures your environment variables are **defined** and **validated** in a consistent, reliable way, reducing the risk of runtime errors.

---

## **🚀 Why TypeSafeEnv?**

Struggling with managing environment variables? Here's why **TypeSafeEnv** is your go-to solution:

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

Install TypeSafeEnv using **npm**:

```bash
npm install ts-typesafe-env
```

Or with yarn:

```bash
yarn add ts-typesafe-env
```

---

### ⚡ Usage

// Importing the Package

> After installing the package, you can easily import it into your codebase

```javascript
import TypeSafeEnv from "ts-typesafe-env";
```

# Validating Environment Variables

### ✅ Use the **predefined methods** to validate your environment variables efficiently and reliably.

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
TypeSafeEnv.validateEnvironment(["DB_URL", "API_KEY", "NEW_DB"]); //if any of the required variables are missing or invalid, the function will log an error to the console.
```

---

### 🚀 No More `process.env`

One of the biggest **benefits** of `TypeSafeEnv` is that you don’t have to manually access each environment variable using `process.env.xyz`.

> Instead, you can simply call the appropriate method for each type of variable, ensuring you get the value you need in a **reliable** and **consistent** way.

### 💡 Simplify Your Code with TypeSafeEnv

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

### 🛠️ Command-Line Interface (CLI)

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

### Validate Environment Variables

```bash
 npx typesafeenv validate --vars DB_URL,API_KEY,
```

## 🔧 Advanced Configuration

You can customize **TypeSafeEnv** to suit the needs of your application. For example:

### 🌍 Dynamic Environment Handling

Instead of hardcoding the environment (e.g., production or development), you can dynamically get the current environment using `process.env.NODE_ENV`.

Example:

```typescript
const currentEnv = process.env.NODE_ENV || "production";
const configValue = TypeSafeEnv.getEnvSpecificConfig("API_KEY", currentEnv);
```

### ⚙️ Custom Validation (For Contributors)

If the built-in validation methods don't meet your needs, **you can extend the package** by creating **custom validators** for more complex logic. This customization is intended for contributors who want to enhance the functionality of **TypeSafeEnv**.

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

**TypeSafeEnv** simplifies the process of validating environment variables, making it ideal for large-scale projects. By leveraging the built-in functions and CLI, developers can easily ensure their environment configuration is correct, minimizing the risk of runtime errors caused by missing or invalid variables.

With **TypeSafeEnv**, you no longer need to manually access `process.env` for every variable, which makes your code cleaner, more maintainable, and reliable.

> Say goodbye to the hassle of managing environment variables manually—**TypeSafeEnv** does it all for you!

---

- **Easy to use**
- **Built-in validation functions**
- **CLI support for quick validation**
- **No more manual access to `process.env`**

---

#

### Made with ❤️ by **Abdul Mujeeb**

A passion project crafted with care to help developers manage environment variables with ease. Thank you for using **TypeSafeEnv**!

> "Code is like humor. When you have to explain it, it’s bad. " – _A M_

---
