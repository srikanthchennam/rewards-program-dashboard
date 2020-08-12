import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {users} from './mock-api/dataSet'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
        minWidth: 120,
        verticalAlign: "unset"
    },
}));

const DropDown = ({setCustomer}) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <FormControl className={classes.formControl} >
                <InputLabel htmlFor="grouped-select">Customers</InputLabel>
                <Select defaultValue="" id="grouped-select"
                        onChange={(event) => setCustomer(event.target.value)}
                >
                    {/*assigned user to keys assuming each user is unique*/}
                    {users.map((user) => ( <MenuItem keys={user} value={user}>{user}</MenuItem>))}
                </Select>
            </FormControl>
        </React.Fragment>
    );
}

export default DropDown;
