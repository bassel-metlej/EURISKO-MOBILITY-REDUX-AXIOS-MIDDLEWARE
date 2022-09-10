import React from "react";
import classes from "./InputComponent.module.css";

import { Grid, InputBase, Paper } from "@material-ui/core";

function InputComponent({
  getlogininfo,
  placeHolder,
  inputValue,
  inputName,
  inputType,
  handleChange,
  SetValue,

  srcimg,
}) {
  const handleChangeInput = (event) => {
    SetValue(event.target.value);
  };

  return (
    <Grid container item xs={12} sm={12}>
      <Grid
        className={classes.full__widthlogin}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={srcimg} alt="person" width="7%" />
        <InputBase
          autoComplete="off"
          style={{ width: "87%" }}
          className={classes.input_font}
          placeholder={placeHolder}
          onChange={handleChangeInput}
          value={inputValue}
          type={inputType}
          name={inputName}
        />
      </Grid>
    </Grid>
  );
}
export default InputComponent;
