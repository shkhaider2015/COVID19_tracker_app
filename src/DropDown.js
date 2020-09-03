import React from 'react'
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(
    (theme) => ({
        formControl : {
            margin : theme.spacing(1),
            minWidth : 300,
        },
        selectEmpty : {
            marginTop : theme.spacing(2),
            padding : theme.spacing(1),
        },
    })
)



let cont = ['pakistan', 'india', 'bangladesh', 'afghanistan']

function DropDownMSearch() {

    const classes = useStyle();
    const handleChange = (event) => {
        console.log(event)
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
                        cont.map(
                            (obj, ind) => {
                                return(
                                <option value={ind} key={ind}>{obj}</option>
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