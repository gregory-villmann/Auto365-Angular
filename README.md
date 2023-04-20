# Auto365Angular

This is the Front-end of the project, the Back-end is available here: https://github.com/gregory-villmann/Auto365-Prisma

## Installation Guide

* Make sure that your Node.js version is v18.12.1 or newer
  * You can verify your Node version by running `node -v` in cmd :)

1. To install dependencies, run `npm install` in the project root
2. Generate .key and .crt files to enable HTTPS
  * Run `openssl genrsa -out ./src/assets/sslcertificate/server.key 2048`
  *
  Run `openssl x509 -req -in ./src/assets/sslcertificate/server.csr -signkey ./src/assets/sslcertificate/server.key -out ./src/assets/sslcertificate/server.crt`

## Development server

1. Run `npm run start` in the root to start the server, which will be available at `https://localhost:4200/`

## E2E Testing

* Run `npx cypres run` to run tests in headless mode or `npx cypress open`, which will open the Cypress Test Runner in
  interactive mode
