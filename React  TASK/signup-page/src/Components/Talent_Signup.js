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

export default function Talent_Signup() {
  const [talentData, setTalentData] = React.useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = React.useState({});
  const [isAgree, setIsAgree] = React.useState();

  //Fetching Talent data
  React.useEffect(() => {
    Axios.get("http://wren.in:3200/api/sign-up/talent").then((res) =>
      console
        .log("Fetching Talent Data::", res)
        .catch((err) => console.log(err))
    );
  }, []);

  // Posting Talent Data
  const Submit = (event) => {
    event.preventDefault();
    // console.log(talentData);
    // console.log(formErrors);
    setFormErrors(validate(talentData));

    if (Object.keys(formErrors).length === 0 && isAgree) {
      Axios.post("http://wren.in:3200/api/sign-up/talent", {
        first_name: talentData.first_name,
        last_name: talentData.last_name,
        username: talentData.username,
        email: talentData.email,
        password: talentData.password,
      })
        .then((res) => console.log("Posting Talent Data::", res))
        .catch((err) => console.log(err));
    }

    setTimeout(() => {
      setTalentData((prevFormData) => {
        return {
          ...prevFormData,
          first_name: "",
          last_name: "",
          username: "",
          email: "",
          password: "",
        };
      });
    }, 5000);
    setIsAgree(false);
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    return errors;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTalentData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };
  const onClick = () => {
    setIsAgree((preval) => !preval);
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
          <Box sx={{ mt: 3 }}>
            <form onSubmit={Submit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="first_name"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    value={talentData.first_name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="lastNaame"
                    label="Last Name"
                    name="last_name"
                    autoComplete="family-name"
                    value={talentData.last_name}
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                  />
                </Grid>
                <p>{formErrors.email}</p>
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
                    onChange={handleChange}
                  />
                </Grid>
                <p>{formErrors.password}</p>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isAgree}
                        onClick={onClick}
                        color="primary"
                      />
                    }
                    label="I agree to terms and conditions."
                  />
                </Grid>
              </Grid>
              {!isAgree && <p>Please agree terms and conditions.</p>}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
