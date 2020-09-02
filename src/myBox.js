import React from 'react'
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core';


const useStyle = makeStyles(
    (theme) => (
        {
            box : {
                width : 200,
                height : 200,
                backgroundColor : 'rgb(209, 202, 6)',
                borderRadius : 10,
                display : 'inline-block'
            },
            text : {
                marginTop : 50,

            },
        }
    )
);

function MyBox()
{
    const classes = useStyle();

    return(
        <Box 
        className={classes.box}
        boxShadow={3}
        >
            <div className={classes.text}>
            <h3>Infected</h3>
            <h1>18,000</h1>
            </div>
        </Box>
    )
}

export default MyBox;