import axios from "axios";

const getQuestions = () => {
  return axios.get(`${process.env.REACT_APP_API}questions`);
};

const postAnswers = (answers: { [questionId: string]: string | string[] }) => {
  return axios.post(`${process.env.REACT_APP_API}submit`, { answers: answers });
};

export default {
  getQuestions,
  postAnswers,
};
