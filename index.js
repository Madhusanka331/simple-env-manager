const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const dotenvSafe = require('dotenv-safe');
const yargs = require('yargs');

// Parse the environment argument
const argv = yargs.option('env', {
  alias: 'e',
  description: 'Specify the environment to use',
  type: 'string',
  default: 'development'  // Default environment
}).argv;

const envFile = `.env.${argv.env}`;
const envPath = path.resolve(process.cwd(), envFile);

// Check if the environment file exists
if (!fs.existsSync(envPath)) {
  console.error(`Environment file ${envFile} not found!`);
  process.exit(1);  // Exit if the file doesn't exist
}

// Load environment variables from the specified file
dotenv.config({ path: envPath });

// Validate environment variables against the example file
dotenvSafe.config({
  example: path.resolve(process.cwd(), '.env.example'),
  path: envPath
});

console.log(`Environment variables loaded from ${envFile}`);
