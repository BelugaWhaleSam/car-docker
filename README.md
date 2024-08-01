![w12](https://github.com/user-attachments/assets/afa6dfe5-8a8b-433c-884a-2bc754728b03)

# My MERN Application

This project is a built with a modern tech stack, including Apollo GraphQL, Typescript, Tailwind CSS, and more. The application is fully responsive and designed to be easily deployable using Docker and Docker Compose.

## Tech Stack

- **Frontend:**
  - React.js
  - Typescript
  - Apollo GraphQL
  - Tailwind CSS
  - Responsive Design

- **Backend:**
  - Node.js
  - Express.js
  - Nest.js
  - TypeORM
  - GraphQL

- **Deployment:**
  - Docker
  - Docker Compose
  - VPS (Virtual Private Server)

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- Yarn
- Docker
- Docker Compose

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. Install backend dependencies
```bash 
cd server
yarn install
```

3. Install frontend dependencies
```bash
cd ../client
yarn install
```

### Running the Application

Development
To start the server in development mode, navigate to the server directory and run:

```bash
cd server
yarn start:dev
```

To start the frontend, navigate to the client directory and run:

```bash
Copy code
cd client
yarn start
```

# Docker
To build and run the application using Docker, use the following commands:

```bash
# Build the Docker images
docker-compose build
```

### Start the containers
```bash
docker-compose up
```

### To shut down the application, use:

```bash
docker-compose down
```

### The application will be accessible at the same ports as in development mode:

Frontend: http://localhost:3000
Backend: http://localhost:9000
GraphQL: http://localhost:9000/graphql
SQL: localhost:3306
