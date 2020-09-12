import React, { useEffect, useState } from 'react'
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



let cont = ['pakistan', 'india', 'bangladesh', 'afghanistan']
const countryNamesURL = "https://covid-19-data.p.rapidapi.com/help/countries?format=json"


function DropDownMSearch(props) {

    const [countries, setCountries] = useState([{}])
    const requestBody = props.reqBody

    useEffect(
        () => {
            async function getCountries() {
                const response = await fetch(countryNamesURL, requestBody);
                const data = await response.json()
                console.log(data)
                setCountries(data)
                console.log("----------------STATE----------------")
            }

            getCountries()
        }, []
    )
    const classes = useStyle();
    const handleChange = (event) => {
        console.log("Change accours !!")
        console.log(event.target.value)

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