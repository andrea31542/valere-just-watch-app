# Just Watch App - README

This project was created for an assignment during an elimination round. While the core functionality has been implemented, some features are still in progress, and certain parts of the application serve as placeholders or need additional refinement. The focus was primarily on developing the essential features rather than fine-tuning every aspect.

## Introduction

This guide walks you through setting up and running the Just Watch-inspired app on your machine. You can run it directly in your local environment or use Docker for a containerized setup.The app aims to mimic the design and functionality of the Just Watch site as closely as possible, though not all features are fully complete. Further optimizations may be needed to enhance performance and usability.

## Features

- **Movie and TV Show Filtering:** Dynamic filtering of content by genre, release date, and rating.
- **Responsive Design:** Fully optimized for all screen sizes using Tailwind CSS.
- **Keyboard Navigation:** Navigate search suggestions with arrow keys and select with Enter.
- **Search Functionality:** Search for movies, TV shows, or actors, with auto-suggestions.
- **Context-based State Management:** Global state management using the React Context API.
- **Infinite Scroll:** Automatically loads more content when scrolling to the bottom of the page.
- **Horizontal Scroll:** Implemented horizontal scrolling to improve navigation through lists of movies and TV shows.
- **Lazy Loading:** Efficiently loads images and content as they come into the viewport, enhancing performance and user experience.

## Technologies Used

- **Next.js:** Framework for React-based applications, enabling server-side rendering and static site generation.
- **TypeScript:** Typed superset of JavaScript, providing static typing and enhanced code quality.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
- **React Context API:** For global state management and efficient data sharing across components.
- **Zustand:** A small, fast, and scalable state management solution for React applications.
- **Axios:** For API calls, providing a promise-based HTTP client for making requests (or you can use the native fetch API).

## Requirements

Before you begin, make sure the following are installed on your system:

- Git for version control
- Node.js and npm (for running locally)
- Docker and Docker Compose (if using Docker)

Additionally, ensure you have the necessary API keys for any external services used by the application. The application uses The Movie Database (TMDb) API for fetching data. You can obtain your API key by visiting [The Movie Database API documentation](https://developer.themoviedb.org/docs/getting-started).

These keys should be provided as environment variables when running the app, either through a `.env` file or directly in your Docker configuration. Refer to the
**[Running the Application with Docker](#running-the-application-with-docker)** section for more details on how to set up these variables.

## Installation and running

### Step 1: Clone the Repository

To set up the Just Watch application on your local machine, follow these steps:

1. **Open your terminal** and navigate to the directory where you want to clone the application.

   - You can use the `cd` command to change directories, for example:
     ```bash
     cd path/to/your/directory
     ```

2. **Run the following command to clone the repository:**

   ```bash
   git clone https://github.com/andrea31542/valere-just-watch-app.git
   ```

### Step 2: Navigate to the Project Directory

After cloning the repository, change to the cloned repository directory by running the following command:

```bash
cd valere-just-watch-app/just-watch-app

```

### Step 3: Install the Necessary Dependencies

Once you are in the project directory, install the required dependencies by running the following command:

```bash
npm install
```

### Step 4: Run the Application

After the dependencies have been successfully installed, you can start the application by running the following command:

```bash
npm run dev
```

### Step 5: Open the Application

After the dependencies have been successfully installed, you can open the application by running the following command:

```bash
npm run dev
```

### Step 6: Terminate the Application

To stop the application, press `Ctrl + C` in the terminal where the application is currently running.

## Running the Application with Docker

### Docker Requirements

- Create Dockerfile

| Command                 | Description                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------- |
| `FROM node:18-alpine`   | Specifies the base image for the container, using Node.js version 18 on Alpine Linux. |
| `WORKDIR /app`          | Sets the working directory inside the container to `/app`.                            |
| `COPY package*.json ./` | Copies the `package.json` and `package-lock.json` files into the container.           |
| `RUN npm install`       | Installs the dependencies listed in the `package.json` file.                          |
| `COPY . .`              | Copies the rest of the application code into the `/app` directory.                    |
| `RUN npm run build`     | Builds the Next.js application for production.                                        |
| `EXPOSE 3000`           | Exposes port 3000, which is used by the application.                                  |
| `CMD ["npm", "start"]`  | Specifies the command to start the application when the container runs.               |

### Usage Notes

- **WORKDIR**: This directive sets the working directory where all subsequent commands will run, ensuring that file paths are correctly referenced.
- **COPY**: This command is used multiple times to transfer files from the host machine into the container. The `package*.json` pattern ensures that both the `package.json` and `package-lock.json` are copied.
- **RUN**: Each `RUN` command executes a command inside the container. The first `RUN` installs dependencies, and the second `RUN` builds the application.
- **EXPOSE**: This is a documentation feature that informs users which port the application will use, though it doesn’t actually publish the port itself.
- **CMD**: The command specified here will run when the container starts, launching the application in production mode.

## Docker Compose File Configuration

To run your application with Docker Compose, create a `docker-compose.yml` file in the root directory of your project with the following content:

```yaml
version: '3.8'

services:
  justwatch-app:
    image: your-image-name
    build: .
    ports:
      - '3000:3000'
    environment:
      - NODE_ENV=${NODE_ENV}
      - NEXT_PUBLIC_API_KEY_TMDB=${your_tmdb_api_key}
```

### Step 1: Clone and Navigate to the Project

If you haven't already done so, please refer to **[Step 1: Clone the Repository](#step-1-clone-the-repository)** and **[Step 2: Navigate to the Project Directory](#step-2-navigate-to-the-project-directory)** to clone the repository and navigate to the project directory.
Once you've completed those steps, continue with the following

### Step 3: Build the Docker Image

Build the Docker image by running:

```bash
docker build -t your-custom-image-name .
```

### Step 4: Deploy the Application

Deploy the application using Docker Compose:

```bash
docker compose up -d
```

### Step 5: Access the Application

Open your web browser and go to:

```bash
http://localhost:3000/
```

### Step 6: Stop the Container

To stop the Docker container, run:

```bash
docker compose stop
```
