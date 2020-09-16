import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import {Line} from 'react-chartjs-2';

function getData()
{
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [21, 34, 50]
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

function LineChart(props)
{
    const classes = useStyle()
    return (
        <Paper className={classes.root}>
          <h2>Line Example</h2>
          <Line data={getData()} />
        </Paper>
      );
}


export default LineChart;
 