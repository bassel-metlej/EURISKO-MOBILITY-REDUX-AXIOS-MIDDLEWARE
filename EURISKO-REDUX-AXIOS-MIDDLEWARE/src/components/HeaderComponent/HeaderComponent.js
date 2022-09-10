import { Grid, InputBase } from "@material-ui/core";
import React from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import classes from "./HeaderComponent.module.css";
import logo from "../../assets/icons/logo.png";
// import { useNavigate } from "react-router-dom";

function HeaderComponent({
  displaySearch,
  FilterAllData,
  SetStateProgressSearch,
}) {
  // let navigate = useNavigate();
  const handleClickButton = () => {
    localStorage.setItem("token", "");
    //   navigate("/");
  };

  const handleChange = (e) => {
    if (e.target.value !== "") {
      SetStateProgressSearch(true);
    } else {
      SetStateProgressSearch(false);
    }
    FilterAllData(e.target.name, e.target.value);
  };

  return (
    <Grid container className={classes.parent_header}>
      <Grid item xs={4} sm={2}>
        <img src={logo} width="87%" />
      </Grid>
      {displaySearch ? (
        <>
          <Grid
            container
            item
            xs={5}
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Grid container item xs={10} sm={8} md={6}>
              <Grid
                className={classes.full__widthlogin}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Grid item xs={11}>
                  <InputBase
                    autoComplete="off"
                    style={{ width: "100%" }}
                    className={classes.search_font}
                    placeholder="type here..."
                    onChange={handleChange}
                    // defaultValue={inputValue}
                    // value={searchContent}
                    type="input"
                    name="searchContent"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={2}
            sm={3}
            md={2}
            className={classes.logout_Style}
          >
            <Grid item xs={8} sm={5}>
              <ButtonComponent
                handleClickButton={handleClickButton}
                contentText="sign out"
              />
            </Grid>
          </Grid>
        </>
      ) : (
        <></>
      )}
    </Grid>
  );
}
export default HeaderComponent;
