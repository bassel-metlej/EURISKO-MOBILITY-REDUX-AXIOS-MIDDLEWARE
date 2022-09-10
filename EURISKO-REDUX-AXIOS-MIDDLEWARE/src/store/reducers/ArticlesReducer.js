import actions from "../constants/articlesConstants";

const initialState = {
  loading: null,
  data: null,
  error: null,
};

const articlesR = (state = initialState, action) => {
  switch (action.type) {
    case actions.ARTICLES:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actions.ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data.response.docs,
      };

    case actions.ARTICLES_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
export default articlesR;
