// ((======= core import ========= ))
import React from 'react';

// ((======= library import ========= ))
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// ((======= custom import ========= ))

const useStyles = makeStyles(() => ({
    textField: {
        "font-family" : "Kh-Battambang"
    },
}));

const InputElement = ({ label , ...rest }) => {
    const classes = useStyles();

    return(
        <TextField label={ label } fullWidth={true} { ...rest }
           InputProps={{
               classes: {
                   input: classes.textField,
               },
           }}
           InputLabelProps={{
               classes : {
                   root : classes.textField
               }
           }}
        />
    );
}

InputElement.defaultProps = {
    label : "ឈ្មោះពេញរបស់អ្នក",
}

export default InputElement;
