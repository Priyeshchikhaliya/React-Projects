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
const theme = createTheme();

export default function SignUp() {
  const [talentData, setTalentData] = React.useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  // Fetching Talent Data
  React.useEffect(() => {
    Axios.get("http://wren.in:3200/api/sign-up/talent").then((res) =>
      console
        .log("Fetching Talent Data ::", res)
        .catch((err) => console.log(err))
    );
  });

  // Posting Talent Data
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(talentData);
    Axios.post("http://wren.in:3200/api/sign-up/talent", {
      first_name: talentData.first_name,
      last_name: talentData.last_name,
      username: talentData.username,
      email: talentData.email,
      password: talentData.password,
    })
      .then((res) => console.log("Posting Talent Data::", res))
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
            Create Your Talent Account
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
                  value={talentData.first_name}
                  onChange={(e) =>
                    setTalentData((prevFormData) => {
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
                  value={talentData.last_name}
                  onChange={(e) =>
                    setTalentData((prevFormData) => {
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
                  value={talentData.username}
                  onChange={(e) =>
                    setTalentData((prevFormData) => {
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
                  value={talentData.email}
                  onChange={(e) =>
                    setTalentData((prevFormData) => {
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
                  value={talentData.password}
                  onChange={(e) =>
                    setTalentData((prevFormData) => {
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
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
