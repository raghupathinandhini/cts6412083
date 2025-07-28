# cts 6412083
# myfirstreact

This is a beginner-level React project created as part of a hands-on lab exercise.

## Objective

To set up a basic React environment and display a custom heading message:  
**"Welcome to the first session of React"**


##  Technologies Used

- **Node.js** - JavaScript runtime environment (v22.17.1)
- **npm** - Node package manager (v10.9.2)
- **React** - Front-end JavaScript library
- **create-react-app** - React app scaffolding tool
- **Visual Studio Code** - Code editor


##  Setup Instructions

### 1. Install Node.js and npm
Download and install from:  
👉 [https://nodejs.org/en/download](https://nodejs.org/en/download)

## Verify installation:
node -v
npm -v

## Install create-react-app:
npm install -g create-react-app

## Create the React App:

--npx create-react-app myfirstreact
--cd myfirstreact

## vs code:
import React from 'react';

function App() {
  return (
    <div>
      <h1>Welcome to the first session of React</h1>
    </div>
  );
}

export default App;

## Run the App:

--npm start.


