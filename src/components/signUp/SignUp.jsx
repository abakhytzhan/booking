import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import spinner from "./spinner.svg";
import { register } from "../../service/register";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://singularity.camp/">
        Jusan Singularity
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [loading, setLoading] = React.useState(false);
  const [usernameMessage, setUserUsernameMessage] = React.useState(false);
  const [emailMessage, setEmailMessage] = React.useState(false);
  const [passwordMessage, setPasswordMessage] = React.useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const username = data.get("username");
    const email = data.get("email");
    const password = data.get("password");

    const patternUsername = /[a-zA-Z0-9_-]{3,15}/;
    const patternEmail = /[^@]+@[a-zA-Z]+\.[a-zA-Z]{2,3}/;
    const patternPassword = /\S{8,30}/;

    patternUsername.test(username)
      ? setUserUsernameMessage(false)
      : setUserUsernameMessage(true);
    patternEmail.test(email) ? setEmailMessage(false) : setEmailMessage(true);
    patternPassword.test(password)
      ? setPasswordMessage(false)
      : setPasswordMessage(true);

    if (
      patternUsername.test(username) &&
      patternEmail.test(email) &&
      patternPassword.test(password)
    ) {
      setLoading(true);
      register(email, username, password)
        .then(() => {
          setLoading(false);
          navigate("/login");
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                />
                {usernameMessage ? (
                  <div className="errorMessage">Invalid username</div>
                ) : null}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                {emailMessage ? (
                  <div className="errorMessage">Invalid email</div>
                ) : null}
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
                />
                {passwordMessage ? (
                  <div className="errorMessage">Invalid password</div>
                ) : null}
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
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
        {loading ? (
          <div className="spinner">
            <img src={spinner} alt="download" />
          </div>
        ) : null}
      </Container>
    </ThemeProvider>
  );
}
