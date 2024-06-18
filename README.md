# Express.js Applications

This repository contains multiple Express.js applications showcasing different functionalities and validation techniques using the Zod schema validator.

## Applications Overview

1. **UsernameAndPassword Validation** : [Link the the file](https://github.com/Sahilll94/Express.js-Overview./blob/main/UsernameAndPasswordValidation.js)
   - Endpoint: `/UsernameAndPassword`
   - Validates input JSON containing `email` and `password` fields.
   - Returns "Correct input." if valid; otherwise, "Invalid Input!" with a 400 status code.

2. **Health Checkup** : [Link the the file](https://github.com/Sahilll94/Express.js-Overview./blob/main/HealthCheckUp.js)
   - Endpoint: `/health-checkup`
   - Retrieves the number of kidneys from the request body.
   - Returns the count of kidneys with a custom message.

3. **Health Checkup (Headers and Query Parameters)** : [Link the the file](https://github.com/Sahilll94/Express.js-Overview./blob/main/HealthCheckUp(HeadersAndQueryParameters).js)
   - Endpoint: `/health-checkup`
   - Validates `username` and `password` in headers.
   - Checks if the number of kidneys (`Kidney` query parameter) is 1 or 2.
   - Returns "Your kidneys are safe." if valid; otherwise, appropriate error messages.

4. **Middleware Authentication and Parameter Validation** : [Link the the file](https://github.com/Sahilll94/Express.js-Overview./blob/main/MiddlewareAuthenticationAndParameterValidation.js)
   - Endpoints: `/health-checkup`, `/kidney-checkup`, `/Heart-Checkup`
   - Uses middleware functions for authentication (`CredentialsChecker`) and kidney number validation (`KidneyNumbersChecker`).
   - Returns safety messages for different health checkups based on middleware validation.

5. **Zod Schema Validation** : [Link the the file](https://github.com/Sahilll94/Express.js-Overview./blob/main/ZodSchemaValidation.js)
   - Validates an array of numbers using Zod.
   - Logs validation response to console.

6. **Health Checkup with Zod Validation** : [Link the the file](https://github.com/Sahilll94/Express.js-Overview./blob/main/HealthCheckupWithZodValidation.js)
   - Endpoint: `/health-checkup`
   - Validates input array containing numbers (representing kidneys) using Zod.
   - Returns the count of kidneys or appropriate error messages.

7. **Kidney Information** : [Link the the file](https://github.com/Sahilll94/Express.js-Overview./blob/main/KidneyInformation.js)
   - Endpoint: `/`
   - Retrieves information about John's kidneys.
   - Returns the total number of kidneys, number of healthy kidneys, and number of unhealthy kidneys.

## Endpoints:
- `GET /`: Retrieves kidney information.
- `POST /`: Adds a new kidney to John's profile based on request body (`IsHealthy` boolean).
- `PUT /`: Updates all kidneys to be healthy.
- `DELETE /`: Removes all unhealthy kidneys if present.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Sahilll94/Express.js-Overview..git
   ```
2. Navigate to the specific application directory:

   ```bash
   cd <application-directory>
   ```

   Replace application-directory while navigating to the specific application directory with the directory containing the specific Express.js application.
   

4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the server:

   ```bash
   npm start
   ```

## Usage
1. Each application demonstrates different aspects of Express.js routing, middleware usage, error handling, and input validation using Zod.
2. Use tools like Postman or curl to send requests to the defined endpoints.
