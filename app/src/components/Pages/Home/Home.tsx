import React, { useContext } from "react";
import Questionnaire from "../../Questionnaire/Questionnaire";
import { MainContext } from "../../../context/QuestionContext";
import "./Home.scss";
import { Grid, Box, Typography } from "@mui/material";

const Home: React.FC = () => {
  const { state } = useContext(MainContext);
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Box textAlign="center" mb={4}>
          {state.isSubmitted ? (
            <div>
              <Typography variant="h4" component="h1">
                Score is: {state.results?.score}
              </Typography>
              <Typography variant="body1">Check answers below</Typography>
            </div>
          ) : (
            <Typography variant="h4" component="h1">
              Welcome to the Questionnaire App
            </Typography>
          )}
        </Box>
        <Questionnaire />
      </Grid>
    </Grid>
  );
};

export default Home;
