// ((======= core import ========= ))
import React from 'react';

// ((======= library import ========= ))
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardElement from "../../elements/card";

// ((======= custom import ========= ))
import Menus from "../../../config/menus";
import HomeBreadcrumb from "../../view-pages/home-page/home-breadcrumb";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CardMenuComponent() {
    const classes = useStyles();
    const menuItem = Menus.map(( { key , label , icon , link} ) =>
        <React.Fragment key={key}>
            <Grid item xs={6} sm={6} md={3} key={key}>
                <CardElement label={label} icon={icon} link={link} />
            </Grid>
        </React.Fragment>
    );
    return (
        <div className={classes.root}>
            <h2 className={`text-underline`}>សូមស្វាគមន៍ ត្រលប់មកវិញ</h2>
            <HomeBreadcrumb/>
            <Grid container spacing={3}>
                { menuItem }
            </Grid>
        </div>
    );
}
