import React, { useEffect, useState } from 'react';
import './App.css';
import MyChart from "./MyChart";
import DropDownMSearch from "./DropDown";
import MyBox from "./myBox";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";



import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(
  (theme) => (
    {
      container: {
        backgroundColor: 'rgb(253, 253, 253)',
        padding: theme.spacing(5),
      },
      dropdownsearch: {
        margin: 'auto'
      },
      grid : {
        textAlign : 'center'
      },
    }
  )
)

function App() {
  const classes = useStyle()
  let [countries, setCountries] = useState([{}])

  useEffect(
    ()=> {
      async function getCountries()
      {
        const url = 'https://api.covid19api.com/countries';
        const response = await fetch(url);
        const data = await response.json()
        console.log(data)
        setCountries(data)
        console.log("----------------STATE----------------")
        console.log(countries)
      }

      getCountries()
      
    }, [])

  return (
    <Container
     maxWidth='md'
     className={classes.container}
     >

      <Grid container spacing={8}>

        <Grid item xs={12} className={classes.grid}>
          
            <DropDownMSearch />
          
        </Grid>

        <Grid item xs={4} className={classes.grid}>
          <MyBox />
        </Grid>
        <Grid item xs={4} className={classes.grid} >
          <MyBox />
        </Grid>
        <Grid item xs={4} className={classes.grid}>
          <MyBox />
        </Grid>

        <Grid item xs={12} className={classes.grid} >
          <MyChart />
        </Grid>

      </Grid>
    </Container>
  );
}

export default App;
