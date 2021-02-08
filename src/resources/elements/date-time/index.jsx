import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default function DatePickerElement({required , ...rest}) {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                {...rest}
                required={required}
                fullWidth
                inputVariant={`outlined`}
                id="date-picker-dialog"
                format="Y-MM-dd"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                animateYearScrolling
            />
        </MuiPickersUtilsProvider>
    );
}

DatePickerElement.defaultProps = {
    label       : "ចំណងជើង",
    required    : true
}
