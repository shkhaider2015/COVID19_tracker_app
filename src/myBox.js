import React, { useEffect } from 'react'
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core';
import CountUp from 'react-countup';


const useStyle = makeStyles(
    (theme) => (
        {
            box : {
                width : 200,
                height : 200,
                borderRadius : 10,
                display : 'inline-block',
                position : "relative",
            },
            text : {
                marginTop : 50,

            },
            hr : {
                height : '10px',
                width : 'auto',
                position : "absolute",
                borderBottomLeftRadius : 10,
                borderBottomRightRadius : 10,
                bottom : 0,
                left : 0,
                right : 0,
            },
        }
    )
);


function getColor(x)
{
    let colors = {
        1 : 'rgb(255, 133, 51)',
        2 : 'rgb(214, 2, 2)',
        3 : 'rgb(2, 214, 59)',
    }

    return colors[x];
}


function MyBox(props)
{
    const classes = useStyle();

    useEffect(()=>{
        
    }, [props.cases])

    return(
        <Box 
        className={classes.box}
        boxShadow={3}
        >
            <div className={classes.text}>
            <h3>{props.title}</h3>
            <h1> <CountUp end={props.cases} duration={4} /> </h1>
            </div>

            <div className={classes.hr} style={{backgroundColor : getColor(props.bgColor)}} >

            </div>
        </Box>
    )
}

export default MyBox;