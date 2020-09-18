import React, { useEffect, useState } from 'react';
import './App.css';
import BarChart from './BarChart'
import DropDownMSearch from "./DropDown";
import MyBox from "./myBox";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { CountryProvider } from "./Context/CountryContext";


import { makeStyles } from '@material-ui/core';

const reqBody = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    "x-rapidapi-key": "90438bb0femshca3a6f0182516b0p1de5c3jsn1d056092ee36"
  }
}

const totalUrl = "https://covid-19-data.p.rapidapi.com/totals?format=json";
const countryByNameURL = "https://covid-19-data.p.rapidapi.com/country?format=json&name=";

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

//sds
function App() {
  const classes = useStyle()
  let [selectedCountry, setSelectedCountry] = useState("global")
  let [infected, setInfected] = useState(0)
  let [deaths, setDeaths] = useState(0)
  let [recover, setRecover] = useState(0)
  let [critical, setCritical] = useState(0)
  

  const handleSelectedCountry = (countryName) =>
  {
    setSelectedCountry(countryName)
  }


  
  useEffect(
    () => {
      async function getData()
      {
        var url = null;

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
        setCritical(data1['critical'])
      }
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

            <DropDownMSearch handleSelectedCountry={handleSelectedCountry}  />

          </Grid>

          <Grid item lg={4} md={4} sm={4} xs={12} className={classes.grid} >
            <MyBox cases={infected} title={"Infected"} bgColor={1} />
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={12} className={classes.grid}  >
            <MyBox cases={deaths} title={"Deaths"} bgColor={2} />
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={12} className={classes.grid}>
            <MyBox cases={recover} title={"Recovered"} bgColor={3} />
          </Grid>
          

          <Grid item lg={12} md={12} sm={12} xs={12} className={classes.grid} >
            <BarChart selectedCountry={selectedCountry} mydata={{1 : infected, 2 : recover, 3 : critical, 4 : deaths}} />
          </Grid>
        </Grid>
      </CountryProvider>

    </Container>
  );
}

export default App;
