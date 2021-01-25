// ((======= core import ========= ))
import React from 'react';

// ((======= library import ========= ))
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

// ((======= custom import ========= ))

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    top : {
        'z-index' : '9999',
    }
}));

const ProgressBarElement = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <LinearProgress color={`secondary`} className={classes.top}/>
        </div>
    );
}

export default ProgressBarElement;
