import actions from "../constants/loginConstants";

const initialState = {
  loading: null,
  data: null,
  error: null,
};

const loginR = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actions.LOGIN_SUCCESS:
      localStorage.setItem("token", action?.payload?.data?.accessToken);
      // console.log(action);

      return {
        ...state,
        loading: false,
        data: action?.payload?.data?.accessToken,
      };

    case actions.LOGIN_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case actions.CLEAR_LOGIN:
      return initialState;

    default:
      return state;
  }
};
export default loginR;
