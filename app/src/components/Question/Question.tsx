import React, { useContext } from "react";
import { MainContext } from "../../context/QuestionContext";
import Typography from "@mui/material/Typography";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import "./Question.scss";

interface QuestionProps {
  question: any;
}
const Question: React.FC<QuestionProps> = ({ question }) => {
  const { state, dispatch } = useContext(MainContext);

  const handleAnswerChange = (
    event: React.ChangeEvent<any> | SelectChangeEvent<any>,
    type?: string,
    subType?: string
  ) => {
    let value: any = event.target.value;
    if (type === "checkbox") {
      const selectedAnswers = (state.answers[question.id] as string[]) || [];
      value = event.target.checked
        ? [...selectedAnswers, value]
        : selectedAnswers.filter((answer) => answer !== value);
    }

    dispatch({
      type: "SET_ANSWER",
      value: { id: question.id, answer: value },
    });
  };

  const renderOptions = () => {
    if (question.type === "radio") {
      return (
        <RadioGroup
          onChange={handleAnswerChange}
          value={state.answers[question.id] || ""}
        >
          {question.options.map((option: string, index: number) => (
            <FormControlLabel
              key={index + option}
              value={option}
              control={<Radio />}
              label={option}
              disabled={state.isSubmitted}
            />
          ))}
        </RadioGroup>
      );
    } else if (question.type === "checkbox") {
      return (
        <FormGroup>
          {question.options.map((option: string, index: number) => (
            <FormControlLabel
              key={index + option}
              value={option}
              control={
                <Checkbox
                  value={option}
                  checked={
                    state.answers[question.id]?.includes(option) || false
                  }
                  onChange={($event) => handleAnswerChange($event, "checkbox")}
                  disabled={state.isSubmitted}
                />
              }
              label={option}
            />
          ))}
        </FormGroup>
      );
    } else if (question.type === "input") {
      return (
        <TextField
          type={question.subType ? question.subType : "input"}
          onChange={($event) => handleAnswerChange($event, "input", "email")}
          value={state.answers[question.id] || ""}
          disabled={state.isSubmitted}
          required={question.required}
        />
      );
    } else if (question.type === "date") {
      return (
        <TextField
          type="date"
          onChange={handleAnswerChange}
          value={state.answers[question.id] || ""}
          disabled={state.isSubmitted}
        />
      );
    } else if (question.type === "select") {
      return (
        <FormControl>
          <Select
            onChange={($event) => handleAnswerChange($event)}
            value={state.answers[question.id] || ""}
            disabled={state.isSubmitted}
          >
            {question.options.map((option: string, index: number) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    }
  };

  const getActualAnswers = () => {
    const value = state.results?.values[question.id]?.actualAnswer;
    return Array.isArray(value) ? value.join(",") : value;
  };

  return (
    <div className="Question">
      <Typography variant="h6" style={{ marginBottom: "15px" }}>
        {question.question}
        {question.mandatory && <span className="required">*</span>}
      </Typography>
      {renderOptions()}
      {state.isSubmitted && (
        <Grid item xs={12} className="Question_result">
          {!state.results?.values[question.id]?.isCorrect && (
            <div>
              <Typography variant="subtitle1" color="secondary">
                <b>Correct Answer:</b>
              </Typography>
              <Typography variant="body1">{getActualAnswers()}</Typography>
            </div>
          )}
        </Grid>
      )}
    </div>
  );
};

export default Question;
