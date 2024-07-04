import React from "react";
import { useRouteError } from "react-router";
import { Container, Typography, Paper, Box, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const ErrorBoundary: React.FC = () => {
  const error: any = useRouteError();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box textAlign="center">
          <Typography variant="h4" component="h1" gutterBottom>
            Oops! Something went wrong.
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {error?.statusText || "An unexpected error occurred."}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {error?.data || "Please try again later."}
          </Typography>
          <Box mt={4}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<HomeIcon />}
              onClick={handleHomeClick}
            >
              Go to Home
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ErrorBoundary;
