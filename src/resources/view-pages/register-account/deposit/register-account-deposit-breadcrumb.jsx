//================= core import ==========
import React from 'react';

//================= library import ========
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/HomeOutlined';

//============== custom import ================
import word from "../../../language/word";
import RoutePath from "../../../../config/route-path";

const useStyles = makeStyles((theme) => ({
    link: {
        display: 'flex',
        color  : "#505050",
    },
    active : {
        color : "#3f51b5",
        fontWeight : "bold"
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
    marginTop : {
        "margin-top" : "20px",
    }
}));


export default function RegisterAccountDepositBreadCrumb() {
    const classes = useStyles();

    return (
        <Breadcrumbs aria-label="breadcrumb" className={classes.marginTop}>
            <Link  to={ RoutePath.home }  className={classes.link}>
                <HomeIcon className={classes.icon} />
                { word.home }
            </Link>
            <Link className={classes.active}
                to={ RoutePath.registerDepositAccount }>
                { word.registerDepositAccount }
            </Link>
        </Breadcrumbs>
    );
}
