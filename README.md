
# AI-Powered Procurement Fraud Detection Dashboard

This project is a web-based dashboard for detecting procurement fraud, featuring interactive tables with pagination and a simple interface for monitoring flagged transactions, vendor performance, and bidding history.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/get-npm) (Node package manager, usually installed with Node.js)
- [json-server](https://github.com/typicode/json-server) (to run a fake REST API)

## Getting Started

### Cloning the Repository

1. Open your terminal or command prompt.
2. Clone the repository using the following command:

   ```bash
   git clone https://github.com/clencyc/Web-Interface-Fraud
   ```

3. Navigate to the project directory:

   ```bash
   cd Web-Interface-Fraud

   cd app
   ```

### Installing Dependencies

Once inside the project directory, install the required dependencies by running:

```bash
npm install
```

### Running the React Application

After installing the dependencies, you can start the React application using:

```bash
npm start
```

This will start the development server and open the application in your default web browser. You can view it at `http://localhost:3000`.

### Running the JSON Server

To run the JSON server for the mock API:

1. Open a new terminal window (do not close the terminal running the React app).
2. Install `json-server` globally if you haven't done so already:

   ```bash
   npm install -g json-server
   ```

3. Navigate to the directory where your `db.json` file is located (usually the root of your project):

   ```bash
   cd app
   ```

4. Start the JSON server using the following command:

   ```bash
   json-server --watch db.json --port 3001
   ```

The JSON server will now be running on `http://localhost:3001`. This endpoint will be used by your React app to fetch data.

## Features

- Flagged Transactions Table with pagination
- Vendors List Table with pagination
- Bidding History Table with pagination
- Responsive design

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
