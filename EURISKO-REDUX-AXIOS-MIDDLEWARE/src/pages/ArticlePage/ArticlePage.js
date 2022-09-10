import { Grid } from "@material-ui/core";
import CardComponent from "../../components/CardComponent/CardComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import image from "../../assets/card-image.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesAction } from "../../store/actions/articlesAction";
import { useEffect } from "react";

function ArticlePage() {
  const dispatch = useDispatch();

  const page = 1;
  useEffect(() => {
    dispatch(getArticlesAction(page));
  }, [dispatch]);

  const { data } = useSelector((state) => state.articles);

  var articleList = [];
  if (data) {
    if (data.length > 0) {
      articleList = data.map((article, index) => {
        return (
          <Grid key={index} container item xs={12} sm={6} md={4} lg={3}>
            <CardComponent
              srcimage={image}
              ArticleTitle={article.source}
              ArticleText={article.lead_paragraph}
            />
          </Grid>
        );
      });
    } else {
      articleList = "";
    }
  }

  return (
    <Grid container item xs={12} style={{ justifyContent: "center" }}>
      <Grid container item xs={12}>
        <HeaderComponent displaySearch />
      </Grid>

      <Grid container item xs={10} style={{ marginTop: "100px" }} spacing={3}>
        {articleList}
      </Grid>

      <Grid container item xs={12} style={{ justifyContent: "center" }}></Grid>
    </Grid>
  );
}

export default ArticlePage;
