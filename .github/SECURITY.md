# Security Policy for TS-TypeSafeEnv

## Reporting a Vulnerability

If you find a security vulnerability within **TS-TypeSafeEnv**, please follow these steps to report it responsibly:

1. **Do Not Create Issues**: Please **do not** create an issue or pull request with the vulnerability details.
2. **Report via Email**: Send your security report directly to [typesafeenv.contact@gmail.com](mailto:typesafeenv.contact@gmail.com).
3. **Provide Necessary Information**: Include a detailed description of the vulnerability, reproduction steps, and any relevant code snippets or logs. The more context you provide, the quicker we can address the issue.
4. **Private Discussion**: We will begin a private conversation to triage and discuss the issue as soon as possible. A security expert from our team will be in touch with you.

## Security Best Practices for Contributors

We recommend that all contributors follow these security best practices when contributing to **TS-TypeSafeEnv**:

1. **Code Review**: All code changes, especially those involving core functionality, should undergo thorough code reviews by at least one other contributor.
2. **Security Testing**: Ensure that any code related to environment variable handling, user authentication, or sensitive information storage is thoroughly tested for vulnerabilities.
3. **Secure Dependencies**: Always use up-to-date, secure versions of dependencies. Make sure that no known security vulnerabilities exist in the libraries and frameworks you're using.

## Security Considerations

- **Sensitive Information**: Ensure that no sensitive information (such as API keys or database credentials) is hardcoded in the codebase. Instead, use environment variables and always secure these secrets using encryption mechanisms.
- **Environment Validation**: Be cautious when adding new features that accept input or modify the environment. Always validate and sanitize environment variables before using them to avoid any unexpected behavior or vulnerabilities.
- **Package Integrity**: Use tools like npm audit and GitHub’s Dependency Graph to ensure your dependencies don’t have vulnerabilities. Regularly audit your dependencies and upgrade them to their secure versions.

## Security Policy Overview

We are committed to maintaining a secure environment for all users and contributors of **TS-TypeSafeEnv**. Our goal is to ensure that any security issue is promptly addressed, and that the package continues to provide a safe and reliable experience for developers.

### Responsible Disclosure

We adhere to responsible disclosure practices. If you believe you've found a security vulnerability in **TS-TypeSafeEnv**, please notify us immediately by email. We will acknowledge your report within 72 hours and work with you to resolve the issue. You can also request a timeline for the fix and a disclosure date.

Thank you for helping us keep **TS-TypeSafeEnv** secure!

---

## Additional Information

For more information on how to contribute securely, review our **[Contributing Guidelines](https://github.com/Innocent6303/typesafe-env/blob/main/CONTRIBUTING.md)**.
