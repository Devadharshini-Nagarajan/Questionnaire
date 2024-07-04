const questions = [
  {
    id: 1,
    question: "Which of the following is a React hook?",
    type: "radio",
    options: ["useFetch", "useState", "useAPI", "useEffect"],
    mandatory: true,
    answer: "useState",
  },
  {
    id: 2,
    question: "Select all lifecycle methods in React class components.",
    type: "checkbox",
    options: [
      "componentDidMount",
      "render",
      "useEffect",
      "shouldComponentUpdate",
    ],
    mandatory: true,
    answer: ["componentDidMount", "render", "shouldComponentUpdate"],
  },
  {
    id: 3,
    question: "What is the command to install React Router?",
    type: "input",
    mandatory: false,
    answer: "npm install react-router-dom",
  },
  {
    id: 4,
    question: "Select your preferred state management library.",
    type: "select",
    options: ["Redux", "MobX", "Context API", "Recoil"],
    mandatory: false,
    answer: "Redux",
  },
  {
    id: 5,
    question: "When was the initial release of React?",
    type: "date",
    mandatory: false,
    answer: "2013-05-29",
  },
  {
    id: 6,
    question:
      "Which of the following are state management libraries for React?",
    type: "checkbox",
    options: ["Redux", "Context API", "jQuery", "React Router"],
    mandatory: false,
    answer: ["Redux", "Context API"],
  },

  {
    id: 7,
    question:
      "What is the command to create a new React app my-app using Create React App?",
    type: "input",
    mandatory: false,
    answer: "npx create-react-app my-app",
  },
  {
    id: 8,
    question:
      "Which hook would you use to manage side effects in functional components?",
    type: "radio",
    options: ["useContext", "useReducer", "useEffect", "useRef"],
    mandatory: false,
    answer: "useEffect",
  },
  {
    id: 9,
    question: "What is the purpose of useRef in React?",
    type: "radio",
    options: [
      "To persist values between renders",
      "To access DOM elements directly",
      "To manage state",
      "To handle side effects",
    ],
    mandatory: false,
    answer:
      "To persist values between renders and access DOM elements directly",
  },
  {
    id: 10,
    question: "What does 'lifting state up' mean in React?",
    type: "checkbox",
    options: [
      "Moving state to a common ancestor to share it between components",
      "Using context to share state",
      "Reducing the number of stateful components",
      "Managing state with Redux",
    ],
    mandatory: false,
    answer: [
      "Moving state to a common ancestor to share it between components",
    ],
  },
];

module.exports = questions;
