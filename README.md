# Questionnaire App

## Project Description

The full-stack questionnaire application is designed to present users with a series of questions that they can answer. It supports multiple types of questions, including multiple-choice, checkboxes, radio buttons, text input, date selection, and dropdowns. Users can navigate through the questions, submit their answers, and see their scores and correct answers after submission.

The frontend is built using React with TypeScript, leveraging Material-UI for styling and component design. The backend API is built with Node.js and Express, providing endpoints to fetch questions and submit answers

## Stack Used

### Frontend

- React
- TypeScript
- Material-UI
- SCSS
- Jest

### Backend

- Node.js
- Express

### Dev Tools

- VS Code
- React Developer Tools
- React Context DevTool

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

## Steps to Run the Application

1. **Clone the Repository**:

   ```bash
    https://github.com/Devadharshini-Nagarajan/Questionnaire.git
    cd Questionnaire

   ```

2. **Running the Backend API**:

   ```bash
   cd api
   npm install
   npm start
   ```

The backend API will be running on http://localhost:3100.

3. **Running the Frontend APP**:

   ```bash
   cd ../app
   npm install
   npm start
   ```

The frontend application will be running on http://localhost:3000.

## Contents to add

- Move reducer types to shared common file
- Make interfaces common and use it everywhere (Eg: Question interface in Question props)
- Accessibility
- In Header/Layout use mui components
- Adjust colors variables / spacing
- Button nav - diff color if its already filled
- Check key from just index to reasonable
- Main logo
- Success, error messages from BE
- Add tooltip for submit
- Organize code a bit more
- For inputs, can add more field validation