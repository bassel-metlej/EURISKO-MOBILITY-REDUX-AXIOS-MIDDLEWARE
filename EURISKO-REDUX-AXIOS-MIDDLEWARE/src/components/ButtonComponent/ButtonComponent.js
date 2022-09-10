import { Button, Grid } from "@material-ui/core"
import classes from "./ButtonComponent.module.css"

function ButtonComponent({contentText,handleClickButton}) {
    
    return(
        <Grid container item xs={12} className={classes.Parent_Button} >
            <Grid container item xs={12} sm={12} md={12} className={classes.Parent_Button_Radius} >
                <Button className={classes.button_style} type="submit"  onClick={()=>handleClickButton()} >
                    {contentText}
                </Button>
            </Grid>
        </Grid>
    )
}

export default ButtonComponent