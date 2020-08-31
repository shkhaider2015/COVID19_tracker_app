import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";





function Sample() {
    return (
        <div>
            <FormControl variant="outlined" className={''}>
                <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
                <Select
                    native
                    label="Age"
                    value=''
                    onChange={''}
                    inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </Select>
            </FormControl>
        </div>
    )
}

export default Sample