# CriptoTest

This project is a test implementation for a company. It includes a user model, CRUD operations to manage users, and integration with the CoinGecko API to collect and store data in a database.

## Features

- User model implementation
- CRUD operations for user management
- Integration with CoinGecko API
- Data storage in MongoDB

## Getting Started

### Prerequisites

- Node.js
- MongoDB (local or Docker)
- You must configurate the .env file with your own data

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/RBrignoli/CriptoTest.git
    cd CriptoTest
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Running the Project

#### Using Local MongoDB

1. Make sure MongoDB is running locally.
2. Start the application:
    ```bash
    npm run dev
    ```

#### Using Docker

1. Build and run the Docker container:
    ```bash
    docker-compose up --build
    ```

## Usage

- The application provides endpoints to create, read, update, and delete users.
- It also fetches data from the CoinGecko API and stores it in the MongoDB database.


## Contact

For any questions or inquiries, please contact ramon.brignoli@gmail.com
