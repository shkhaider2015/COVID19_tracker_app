import React, {useEffect, useState } from 'react'
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(
    (theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 300,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
            padding: theme.spacing(1),
        },
    })
)
const reqBody = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      "x-rapidapi-key": "90438bb0femshca3a6f0182516b0p1de5c3jsn1d056092ee36"
    }
  }


const countryNamesURL = "https://covid-19-data.p.rapidapi.com/help/countries?format=json"


function DropDownMSearch(props) {

    const [countries, setCountries] = useState([{}])

    useEffect(
        () => {
            async function getCountries() {
                const response = await fetch(countryNamesURL, reqBody);
                const data = await response.json()
                setCountries(data)
            }

            setTimeout(() => { getCountries() }, 2000)
        }, []
    )
    const classes = useStyle();

    const handleChange = (event) => {
        let country = null;
        country = countries[event.target.value]

        if (country == null) {
            country = { name: 'global' }
        }

        var countryName = country['name']
        props.handleSelectedCountry(countryName)



    }
    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>

                <InputLabel htmlFor="outlined-age-native-simple">Select Country</InputLabel>
                <Select
                    native
                    onChange={handleChange}
                    label="Select Country"
                    inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option value="" aria-label="None" />
                    {
                        countries.map(
                            (obj, ind) => {
                                return (
                                    <option value={ind} key={ind}>{obj.name}</option>
                                )
                            }
                        )

                    }
                </Select>
                <FormHelperText></FormHelperText>

            </FormControl>
        </div>
    )

}

export default DropDownMSearch;