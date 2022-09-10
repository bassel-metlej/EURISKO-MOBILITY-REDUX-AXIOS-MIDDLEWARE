import { Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import CardPaper from "../../components/CardPaper/CardPaper";
import InputComponent from "../../components/InputComponent/InputComponent";
import classes from "./LoginPage.module.css";
import person from "../../assets/icons/username-icon.png";
import passwordimg from "../../assets/icons/password-icon.png";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { useNavigate } from "react-router-dom";
import ButtonWithCircleProgress from "../../components/ButtonWithCircleProgress/ButtonWithCircleProgress";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../store/actions/loginActions";

function LoginPage() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const { data, loading } = useSelector((state) => state.login);

  const handleClickLogin = () => {
    dispatch(loginAction(username, password));
  };

  useEffect(() => {
    if (data) {
      navigate({ pathname: "/Articles" });
    }
  }, [data, navigate]);

  return (
    <Grid>
      <HeaderComponent />
      <Grid container className={classes.parent_Grid}>
        <Grid container item xs={9} sm={8}>
          <CardPaper>
            <Grid container item xs={12} className={classes.Parent_Typograpy}>
              <Grid item xs={12} className={classes.Parent_Typograpy}>
                <Typography className={classes.tile_login}>Login</Typography>
              </Grid>
              <Grid item xs={10} sm={12} className={classes.Parent_Typograpy}>
                <Grid className={classes.tile_info}>
                  Please enter your email and password!
                </Grid>
              </Grid>
            </Grid>

            <Grid
              container
              item
              spacing={1}
              xs={12}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              className={classes.Parent_Inputs}
            >
              <Grid item xs={12} sm={10} md={8}>
                <InputComponent
                  srcimg={person}
                  placeHolder="Enter Your Email"
                  SetValue={SetUsername}
                  inputValue={username}
                  inputName="username"
                  inputType="text"
                />
              </Grid>

              <Grid item xs={12} sm={10} md={8}>
                <InputComponent
                  srcimg={passwordimg}
                  placeHolder="Enter Your Password"
                  SetValue={SetPassword}
                  inputValue={password}
                  inputName="password"
                  inputType="password"
                />
              </Grid>
            </Grid>

            <Grid container item xs={12} className={classes.Forgot_Password}>
              <Grid>Forgot password?</Grid>
            </Grid>

            <Grid container item xs={12} className={classes.Parent_Button}>
              <Grid container item xs={4} sm={4} md={2}>
                <ButtonWithCircleProgress
                  StateProgress={loading}
                  handleClickButton={handleClickLogin}
                  contentText="sign in"
                />
              </Grid>
            </Grid>
          </CardPaper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LoginPage;
