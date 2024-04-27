# User Login Frontend

This repository contains the frontend code for the User Login application built using HTML, CSS, React, and Redux. It sets up the ReactJS project through Webpack.

## Setup Instructions

To set up the environment, follow these steps:

**Clone the repository**:
   
    git clone https://github.com/grovervinayak/UserLogin-Frontend.git

**Navigate to the project directory**: 

    cd UserLogin-Frontend

**Install dependencies**: 

    npm install

**Start the development server**: 

    npm run start

The development server will start, and you can view the output at [localhost:8080](http://localhost:8080).

## Features

- **User Signup**: Allows new users to create an account.
- **User Login**: Enables existing users to log in.
- **User Listing**: Displays a list of all registered users.

## API Routes

The frontend interacts with the following API routes:

1. `POST /api/v1/usersignup`: Used to sign up a user.
2. `GET /api/v1/userlist`: Used to retrieve the list of all users.
3. `POST /api/v1/userlogin`: Used to log in a user.

## Project Structure

```bash
Src
    ├───App
    │   ├───Actions
    │   ├───CommonComponents
    │   │   ├───Containers
    │   │   ├───Forms
    │   │   ├───Headers
    │   │   └───MessageBars
    │   ├───Components
    │   ├───Core
    │   ├───Reducers
    │   └───Utils
    └───dist
        └───app
```

### Key Directories

- **Actions**: Contains Redux actions for dispatching purposes.
- **Reducers**: Houses Redux reducers to handle state changes.
- **Containers**: React components connected to Redux.
- **Components**: Presentational React components.
- **Utils**: Utility functions and helpers.

## Prerequisites

- Node.js
- npm or yarn

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open issues to improve the documentation or code.
