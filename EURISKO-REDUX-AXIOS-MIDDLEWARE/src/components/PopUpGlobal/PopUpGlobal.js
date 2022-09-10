import { Backdrop, Card, Grid, Paper, Table, TableBody, TableContainer, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './PopUpGlobal.css';
import CloseIcon from '@material-ui/icons/Close';

function PopUpGlobal(props) {
    const {  message2, ResetAllData,errorReset } = props;
    const [open, setopen] = React.useState(true)
    const handleClose = () => {
        setopen(false)
        ResetAllData(errorReset,'')
    }

    return (

        <Backdrop open={open} onClick={handleClose} className="parenbackdrop">
            <Card className="card2223" >

                <Table className="modal">
                    <TableContainer style={{"text-align": "center",width: "99.5%",color:"#741327"}}>
                        <CloseIcon style={{ "float": "right" }} />
                        <Table aria-label="caption table">
                            <TableBody>
                                <TableRow>
                                    <Grid container style={{height:"13vw",alignItems:"center",justifyContent:"center"}}>
                                       < Grid item> {message2}</Grid>
                                    
                                    </Grid>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Table></Card>
        </Backdrop>
    );
}

export default PopUpGlobal;

