import axios from "axios";
import { constants } from "./Constants";
import { multiClientMiddleware } from "redux-axios-middleware";

function UseAxHook(params, method) {
  axios
    .method(constants + "auth/signin", params, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => {
      localStorage.setItem("token", res.data.accessToken);
      if (res.data.error === "Unauthorized") {
        dispatch(loginSubmitDataFail("Please check your login credentials"));
      } else {
        dispatch(loginSubmitData(res.data));
      }
    })
    .catch((err) => {
      dispatch(loginSubmitDataFail(err));
    });
}

export default UseAxHook;
