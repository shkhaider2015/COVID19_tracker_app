import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import {Bar} from 'react-chartjs-2';

function getData(infected, recovered, critical, deaths)
{
    const data = {
        labels: ['Infected', 'Recovered', 'Critical', 'Deaths'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [infected, recovered, critical, deaths]
          }
        ]
      };

      return data;
  
}

const useStyle = makeStyles(
    (theme) => (
        {
            root : {
                width : theme.spacing(90),
                height : theme.spacing(50),
                padding : theme.spacing(2),
                display : 'inline-block'
            },
        }
    )
)

function BarChart(props)
{
    const classes = useStyle()
    return (
        <Paper className={classes.root}>
          <span>checking actions ..</span>
          <Bar
          data={getData(props.mydata[1], props.mydata[2], props.mydata[3], props.mydata[4])}
          options={{
            maintainAspectRatio: false
          }}
        />
        </Paper>
      );
}


export default BarChart;
 