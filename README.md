# Questionnaire App

## Project Description

The full-stack questionnaire application is designed to present users with a series of questions that they can answer. It supports multiple types of questions, including multiple-choice, checkboxes, radio buttons, text input, date selection, and dropdowns. Users can navigate through the questions, submit their answers, and see their scores and correct answers after submission.

The frontend is built using React with TypeScript, leveraging Material-UI for styling and component design and Jest for testing. The backend API is built with Node.js and Express, providing endpoints to fetch questions and submit answers. The application is fully responsive, ensuring a seamless experience across different devices.



<img width="1438" alt="image" src="https://github.com/Devadharshini-Nagarajan/Questionnaire/assets/113491692/7a075d5a-9791-4c01-899a-ed5b5b4c4d21">



<img width="1438" alt="image" src="https://github.com/Devadharshini-Nagarajan/Questionnaire/assets/113491692/2ccabd22-b7a1-4253-b600-4cc6af2bafe2">



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

**Minor features**:
- More Unit Testing
- Send Success, Error messages from BE
- Unit test for API
- Move reducer types to shared common file
- Make interfaces common and use it everywhere (Eg: Question interface in Question props)
- Accessibility
- In Header/Layout use mui components
- Adjust colors variables / spacing
- Button nav - diff color if its already filled
- Check key from just index to reasonable
- Main logo
- Add tooltip for submit
- Organize code a bit more
- For inputs, can add more field validation
- Move Score / Welcome content to new component
- Chnage API folder structure
- Follow - routes, controllers,  service

**Major features**:
- Deploy in Netlify and Render (https://questionnaire-4wf8.onrender.com)
- Make Docker Image for deployment
- Cypress for E2E testing
- Integrate with SQL

