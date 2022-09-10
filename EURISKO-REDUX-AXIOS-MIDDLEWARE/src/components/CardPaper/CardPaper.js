import { Card, Grid, Paper } from '@material-ui/core';
import React from 'react';
import classes from './CardPaper.module.css';

function CardPaper({ children }) {
    return (
        <>
            <Grid item xs={12} >
                <Paper evaluation={1} className={classes.card} >

                    <Grid item xs={12}>
                        {children}
                    </Grid>

                </Paper>
            </Grid>
        </>
    )
}

export default CardPaper;
