import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    root: {

    },
});

export default function SimpleCard({ children , ...rest }) {
    const classes = useStyles();
    return (
        <Card className={classes.root} {...rest}>
            <CardContent>
                { children }
            </CardContent>
        </Card>
    );
}
