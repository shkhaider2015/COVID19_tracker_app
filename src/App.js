import React, { useContext, useEffect, useReducer, useState } from 'react';
import './App.css';
import MyChart from "./MyChart";
import DropDownMSearch from "./DropDown";
import MyBox from "./myBox";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { CountryProvider, CountryContext } from "./Context/CountryContext";
import MyCountryReducer from "./Reducer/MyCountryReducer";


import { makeStyles } from '@material-ui/core';

const reqBody = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    "x-rapidapi-key": "90438bb0femshca3a6f0182516b0p1de5c3jsn1d056092ee36"
  }
}

// const countryNamesURL = "https://covid-19-data.p.rapidapi.com/help/countries?format=json"

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
      grid: {
        textAlign: 'center'
      },
    }
  )
)


function App() {
  const classes = useStyle()
  const [selectedCountry, setSelectedCountry] = useState("global")
  

  const handleSelectedCountry = (countryName) =>
  {
    setSelectedCountry(countryName)
    console.log("Country Name is : ", selectedCountry)
  }

  useEffect(
    () => {
      // async function getCountries()
      // {
      //   const response = await fetch(countryNamesURL, reqBody);
      //   const data = await response.json()
      //   console.log(data)
      //   setCountries(data)
      //   console.log("----------------STATE----------------")
      // }

      // getCountries()
      console.log("App.js / UseEffect() --> ")
      console.log()
      

    }, [])

    

  return (
    <Container
      maxWidth='md'
      className={classes.container}
    >

      <CountryProvider>
        <Grid container spacing={8}>

          <Grid item xs={12} className={classes.grid}>

            <DropDownMSearch reqBody={reqBody} handleSelectedCountry={handleSelectedCountry} />

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
      </CountryProvider>

    </Container>
  );
}

export default App;
