import actions from "../constants/articlesConstants";

export const getArticlesAction = (page) => {
  return {
    type: actions.ARTICLES,
    payload: {
      request: {
        url: "articles",
        method: "GET",
        authenticated: true,
        params: {
          page: page,
        },
      },
    },
  };
};
