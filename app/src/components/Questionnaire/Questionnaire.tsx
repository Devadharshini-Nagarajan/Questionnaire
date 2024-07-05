import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../../context/QuestionContext";
import questionnaireService from "../../services/questionnaire.service";
import { Box, Button, CircularProgress, Grid } from "@mui/material";
import Question from "../Question/Question";
import { NotificationContext } from "../../context/NotificationContext";
import "./Questionnaire.scss";

const Questionnaire: React.FC = () => {
  const { state, dispatch } = useContext(MainContext);
  const { showNotification } = useContext(NotificationContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    questionnaireService
      .getQuestions()
      .then((res) => {
        showNotification("Questions fetched successfully", "success");
        dispatch({ type: "SET_QUESTIONS", value: res.data.questions });
        setLoading(false);
      })
      .catch((error) => {
        showNotification("Failed to fetch questions", "error");
        console.error("Error fetching questions:", error);
        setLoading(false);
      });
  }, [dispatch]);

  const handleSubmit = () => {
    setLoading(true);
    questionnaireService
      .postAnswers(state.answers)
      .then((res) => {
        showNotification("Answers submitted successfully", "success");
        dispatch({ type: "SET_SUBMITTED_RESULTS", value: res.data });
        setLoading(false);
      })
      .catch((error) => {
        showNotification("Failed to submit answers", "error");
        console.error("Error submitting answers:", error);
        setLoading(false);
      });
  };

  const handleRetry = () => {
    dispatch({ type: "CLEAR_STATE" });
  };

  const isValidAnswer = (answer: any): boolean => {
    if (Array.isArray(answer)) {
      return answer.length > 0;
    }
    return answer !== undefined && answer !== null && answer !== "";
  };
  

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 9 }}
        justifyContent="center"
        className="q-nav"
      >
        {state.questions.map((q, index) => (
          <Grid item xs={3} sm={1} key={index}>
            <Button
              variant={state.answers[q.id] ? "contained" : "outlined"}
              className={state.currentQIndex === index ? "current-btn" : ""}
              color={
                state.isSubmitted
                  ? state.results.values[q.id]?.isCorrect
                    ? "success"
                    : "error"
                  : "primary"
              }
              onClick={() =>
                dispatch({ type: "SET_CURRENT_QUESTION_INDEX", value: index })
              }
              fullWidth
            >
              {index + 1}
            </Button>
          </Grid>
        ))}
      </Grid>
      {state.questions[state.currentQIndex] && (
        <>
          <Question question={state.questions[state.currentQIndex]} />

          <Box className="q-buttons mt-5">
            <Button
              variant="contained"
              color="secondary"
              onClick={() =>
                dispatch({
                  type: "SET_CURRENT_QUESTION_INDEX",
                  value: state.currentQIndex - 1,
                })
              }
              disabled={state.currentQIndex === 0}
            >
              Prev
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() =>
                dispatch({
                  type: "SET_CURRENT_QUESTION_INDEX",
                  value: state.currentQIndex + 1,
                })
              }
              disabled={state.currentQIndex === state.questions.length - 1}
            >
              Next
            </Button>
          </Box>
          <Box display="flex" justifyContent="center">
            {!state.isSubmitted ? (
              <Button
                variant="contained"
                color="success"
                onClick={handleSubmit}
                disabled={
                  !state.questions
                    .filter((q) => q.mandatory)
                    .every((q) => isValidAnswer(state.answers[q.id]))
                }
              >
                Submit
              </Button>
            ) : (
              <Button variant="contained" color="success" onClick={handleRetry}>
                Retry
              </Button>
            )}
          </Box>
        </>
      )}
    </div>
  );
};

export default Questionnaire;
