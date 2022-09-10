import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classes from './CardComponent.module.css'
import { Grid } from '@material-ui/core';
export default function CardComponent({ srcimage,ArticleTitle,ArticleText }) {
    return (
            <Card sx={{ width: "100%"}} >
                <Grid container item xs={12} style={{ justifyContent: "center" }} >
                    <Grid container item xs={10}>
                      
                        <CardMedia
                            component="img"
                            width="100%"
                            height="auto"
                            image={srcimage}
                            alt="green iguana"
                        />
                    </Grid>
                </Grid>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {ArticleTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className={classes.typo} >
                       {ArticleText}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className={classes.ShareLearnButton}>Share</Button>
                    <Button className={classes.ShareLearnButton}>Learn More</Button>
                </CardActions>
            </Card>
    );
}