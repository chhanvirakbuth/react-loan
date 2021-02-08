import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { v4 as uuidv4 } from 'uuid';


const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
        width   : '100%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SimpleSelect({ id , label , variant , required , handleChange, items , ...rest }) {
    const classes = useStyles();
    const [ value ,setValue ] = useState('');
    const listItems = items.map((item) =>
        // item code for location item id for default select
        <MenuItem value={ item.code ? item.code : item.id } key={item.id}>{ item.name }</MenuItem>
    );
    const handleSelectChange = (event) => {
        setValue(event.target.value);
        handleChange( event )
    };

    return (
        <div>
            <FormControl required={required} variant={variant} className={classes.formControl}>
                <InputLabel id={id}>{ label }</InputLabel>
                <Select
                    autoWidth={true}
                    labelId={id}
                    label={ label }
                    { ...rest }
                    value={value}
                    onChange={handleSelectChange}
                >
                    { listItems }
                </Select>
            </FormControl>
        </div>
    );
}

SimpleSelect.defaultProps = {
    label   : "Label",
    id      : uuidv4(),
    variant : "outlined",
    required: true,
    items   : []
}
