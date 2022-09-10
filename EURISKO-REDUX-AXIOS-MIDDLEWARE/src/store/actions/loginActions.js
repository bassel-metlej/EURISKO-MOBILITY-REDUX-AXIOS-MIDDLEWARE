import actions from "../constants/loginConstants";

export const loginAction = (username, password) => ({
  type: actions.LOGIN,
  payload: {
    request: {
      url: "auth/signin",
      method: "POST",
      data: {
        username,
        password,
      },
    },
  },
});

export const clearLogin = () => ({
  type: actions.CLEAR_LOGIN,
});
