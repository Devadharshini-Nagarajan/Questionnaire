const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const questions = require("./constants/questions");

const port = process.env.PORT || 3100;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get("/api/questions", (req, res) => {
  const questionsWithoutAnswers = questions.map(
    ({ answer, ...question }) => question
  );
  res.status(200).json({ questions: questionsWithoutAnswers });
});

app.post("/api/submit", (req, res) => {
  const answers = req.body.answers;
  let score = 0;

  const values = {};
  questions.forEach((question) => {
    const userAnswer = answers[question.id];
    console.log(userAnswer, question.answer);
    const isCorrect = Array.isArray(question.answer)
      ? JSON.stringify(question.answer?.sort()) ===
        JSON.stringify(userAnswer?.sort())
      : question.answer === userAnswer;

    if (isCorrect) {
      score += 1;
    }
    values[question.id] = {
      actualAnswer: question.answer,
      userAnswer: userAnswer,
      isCorrect: isCorrect,
    };
  });

  res.status(200).json({ score: score, values: values });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
