# EnvManager

EnvManager is a simple and effective Node.js package that helps developers manage environment variables across different environments (development, staging, production). It simplifies the process of loading and validating environment variables, ensuring that your application is always configured correctly.

## Features

- **Easy Environment Management**: Load environment variables from different files based on the specified environment.
- **Validation**: Automatically validates environment variables against a reference file to ensure all required variables are set.
- **Secure**: Ensures that sensitive environment variables are securely managed across environments.

## Installation

Install EnvManager via npm:

```bash
npm install env-manager --save
```

## Usage

### 1. Create Environment Files

Create environment-specific files in the root of your project, such as:

- `.env.development`
- `.env.staging`
- `.env.production`
- `.env.example` (to serve as a template for required variables)

Example `.env.development` file:

<pre>
<code>
DB_HOST=localhost
DB_PORT=5432
DB_USER=devuser
DB_PASSWORD=devpass
</code>
</pre>

### 2. Setup EnvManager in Your Project

Require EnvManager at the top of your entry file (e.g., `index.js`):

<pre>
<code>
require('env-manager');
</code>
</pre>

### 3. Run Your Application

Specify the environment when running your application:

```bash
node index.js --env=development
node index.js --env=staging
node index.js --env=production
```

EnvManager will automatically load the appropriate environment variables based on the `--env` flag.

### 4. Validate Environment Variables

EnvManager will automatically validate your environment variables against the `.env.example` file. If any required variables are missing, the process will exit with an error.

## Example

Here's a basic example to demonstrate how EnvManager works:

Create a `test.js` file:

<pre>
<code>
require('env-manager');

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
</code>
</pre>

Run the script with different environments:

```bash
node test.js --env=development
node test.js --env=staging
node test.js --env=production
```

## Configuration

EnvManager uses the following files to manage environment variables:

- `.env.<environment>`: Environment-specific variables (e.g., `.env.development`, `.env.staging`).
- `.env.example`: A reference file that lists all required environment variables.

## Troubleshooting

- **Environment File Not Found**: Ensure that the environment file (e.g., `.env.development`) exists in the root of your project.
- **Missing Required Variables**: Check that all required environment variables are defined in the environment file and listed in `.env.example`.

## Contributing

Contributions are welcome! If you'd like to contribute to EnvManager, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


---

Thank you for using EnvManager! We hope it simplifies your environment management and makes your development process smoother.
