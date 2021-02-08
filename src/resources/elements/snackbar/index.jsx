import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function CustomizedSnackbars({ type,open ,children , key ,...rest }) {
    const classes = useStyles();
    const [display, setDisplay ] = React.useState(open);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setDisplay(false);
    };

    return (
        <div className={classes.root}>
            <Snackbar open={display}
                      anchorOrigin={{ vertical : 'bottom', horizontal : 'right' }}
                      key={key}
                      autoHideDuration={6000} onClose={handleClose} {...rest}>
                <Alert onClose={handleClose} severity={ type }>
                    { children }
                </Alert>
            </Snackbar>
        </div>
    );
}

CustomizedSnackbars.defaultProps = {
    type : "success",
    open : false,
    key : uuidv4()
}
