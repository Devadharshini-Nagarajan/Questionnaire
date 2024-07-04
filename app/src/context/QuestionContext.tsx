import React, { Dispatch, ReactNode, createContext, useReducer } from "react";

interface Question {
  id: number;
  question: string;
  type: string;
  options?: string[];
  mandatory: boolean;
}

interface State {
  currentQIndex: number;
  questions: Question[];
  answers: {
    [questionId: string]: string | string[];
  };
  isSubmitted: boolean;
  results: any;
}

interface Payload {
  type: string;
  value?: any;
}

const initialState: State = {
  currentQIndex: 0,
  questions: [],
  answers: {},
  isSubmitted: false,
  results: {},
};

export const MainContext = createContext<{
  state: State;
  dispatch: Dispatch<Payload>;
}>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: State, payload: Payload) => {
  switch (payload.type) {
    case "SET_QUESTIONS":
      return { ...state, questions: payload.value };
    case "SET_SUBMITTED_RESULTS":
      return { ...state, isSubmitted: true, results: payload.value };
    case "SET_CURRENT_QUESTION_INDEX":
      return { ...state, currentQIndex: payload.value };
    case "SET_ANSWER":
      return {
        ...state,
        answers: {
          ...state.answers,
          [payload.value.id]: payload.value.answer,
        },
      };
    case "CLEAR_STATE":
      return {
        ...state,
        currentQIndex: 0,
        answers: {},
        isSubmitted: false,
        results: {},
      };
    default:
      return state;
  }
};

const QuestionContext: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};

export default QuestionContext;
