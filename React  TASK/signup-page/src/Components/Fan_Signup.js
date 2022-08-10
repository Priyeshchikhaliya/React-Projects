import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Axios from "axios";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const theme = createTheme();

export default function SignUp() {
  const [fanData, setFanData] = React.useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });
  //Fetching Fan data
  React.useEffect(() => {
    Axios.get("http://wren.in:3200/api/sign-up/fan").then((res) =>
      console.log("Fetching Fan Data::", res).catch((err) => console.log(err))
    );
  });

  // Posting Fan Data
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(fanData);
    Axios.post("http://wren.in:3200/api/sign-up/fan", {
      first_name: fanData.first_name,
      last_name: fanData.last_name,
      username: fanData.username,
      email: fanData.email,
      password: fanData.password,
    })
      .then((res) => console.log("Posting Fan Data::", res))
      .catch((err) => console.log(err));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Create Your Fan Account
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={fanData.first_name}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                  onChange={(e) =>
                    setFanData((prevFormData) => {
                      return {
                        ...prevFormData,
                        first_name: e.target.value,
                      };
                    })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={fanData.last_name}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                  onChange={(e) =>
                    setFanData((prevFormData) => {
                      return {
                        ...prevFormData,
                        last_name: e.target.value,
                      };
                    })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                  autoComplete="family-name"
                  value={fanData.username}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                  onChange={(e) =>
                    setFanData((prevFormData) => {
                      return {
                        ...prevFormData,
                        username: e.target.value,
                      };
                    })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={fanData.email}
                  validators={["required", "isEmail"]}
                  errorMessages={[
                    "this field is required",
                    "email is not valid",
                  ]}
                  onChange={(e) =>
                    setFanData((prevFormData) => {
                      return {
                        ...prevFormData,
                        email: e.target.value,
                      };
                    })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={fanData.password}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                  onChange={(e) =>
                    setFanData((prevFormData) => {
                      return {
                        ...prevFormData,
                        password: e.target.value,
                      };
                    })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I agree to terms and conditions."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
