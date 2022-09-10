import { Button, CircularProgress, Grid } from "@material-ui/core"
import classes from "./ButtonWithCircleProgress.module.css"

function ButtonWithCircleProgress({ contentText, handleClickButton, tokenLogin, StateProgress }) {

    return (
        <Grid container item xs={12} className={classes.Parent_Button} >
            <Grid container item xs={12} sm={12} md={12} className={classes.Parent_Button_Radius} >

                {StateProgress ? <CircularProgress size={30} /> :
                    <Button className={classes.button_style} type="submit" onClick={() => handleClickButton()} >
                        {contentText}
                    </Button>
                }
            </Grid>
        </Grid>
    )
}

export default ButtonWithCircleProgress