import React, { useContext, useEffect, useReducer, useState } from 'react';
import './App.css';
import MyChart from "./MyChart";
import LineChart from './LineChart'
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
const totalUrl = "https://covid-19-data.p.rapidapi.com/totals?format=json";
const countryByNameURL = "https://covid-19-data.p.rapidapi.com/country?format=json&name=";
var infected = 0;
var death = 0;
var recover = 0;

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
  let [selectedCountry, setSelectedCountry] = useState("global")
  let [infected, setInfected] = useState(0)
  let [deaths, setDeaths] = useState(0)
  let [recover, setRecover] = useState(0)
  

  const handleSelectedCountry = (countryName) =>
  {
    console.log("Comes here : ", countryName)
    setSelectedCountry(countryName)
    console.log("Country Name is : ", selectedCountry)
    console.log("App --> selectedCountry is --> : ", selectedCountry)
  }

  async function getData()
  {
    var url = null;
    console.log("Now Country name is : ", selectedCountry)

        if (selectedCountry === "global")
        {
          console.log("Url is global")
          url = totalUrl;
        }
        else
        {
          console.log("Url is countryByName")
          url = countryByNameURL + selectedCountry;
        }

        if(url == null)
        {
          console.log("Url is null")
          return;
        }

        const response = await fetch(url, reqBody);
        const data = await response.json()
        const data1 = await data[0];
        
        setInfected(data1['confirmed']) 
        setDeaths(data1['deaths'])
        setRecover(data1['recovered'])
  }
  
  useEffect(
    () => {
      console.log("useEffect() runs !!")
      getData()
    }, [selectedCountry]
)

  return (
    <Container
      maxWidth='md'
      className={classes.container}
    >

      <CountryProvider>
        <Grid container spacing={8}>

          <Grid item xs={12} className={classes.grid}>

            <DropDownMSearch reqBody={reqBody} handleSelectedCountry={handleSelectedCountry}  />

          </Grid>

          <Grid item xs={4} className={classes.grid} >
            <MyBox cases={infected} title={"Infected"} bgColor={1} />
          </Grid>
          <Grid item xs={4} className={classes.grid}  >
            <MyBox cases={deaths} title={"Deaths"} bgColor={2} />
          </Grid>
          <Grid item xs={4} className={classes.grid}>
            <MyBox cases={recover} title={"Recovered"} bgColor={3} />
          </Grid>
          

          <Grid item xs={12} className={classes.grid} >
            <LineChart selectedCountry={selectedCountry} />
          </Grid>
        </Grid>
      </CountryProvider>

    </Container>
  );
}

export default App;
