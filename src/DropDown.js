import React from 'react'
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";


function DropDownMSearch() {
    return (
        <div>
            <FormControl className={'classes.formControl'}>
                <Select
                    value={'age'}
                    onChange={'handleChange'}
                    displayEmpty
                    className={'classes.selectEmpty'}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="" disabled>
                        Placeholder
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Placeholder</FormHelperText>
            </FormControl>

        </div>
    )

}

export default DropDownMSearch;