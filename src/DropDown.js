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

function DropDownMSearch(props) {

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
                        props.value.map(
                            (obj, ind) => {
                                return(
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