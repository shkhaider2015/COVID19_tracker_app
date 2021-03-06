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
                width : '90%',
                height : '100%',
                padding : theme.spacing(2),
                display : 'inline-block',
                position : "relative",
            },
        }
    )
)

function BarChart(props)
{
    const classes = useStyle()
    return (
        <Paper className={classes.root}>
          <span>{props.selectedCountry.toUpperCase()}</span>
          <Bar
          data={getData(props.mydata[1], props.mydata[2], props.mydata[3], props.mydata[4])}
          options={{
            responsive : true,
            maintainAspectRatio: true
          }}
        />
        </Paper>
      );
}


export default BarChart;
 