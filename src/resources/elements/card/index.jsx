// ((======= core import ========= ))
import React from 'react';

// ((======= library import ========= ))
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        cursor : "pointer",
        borderRadius : '5px',
        width  : "100%",
        textAlign: 'center',
        "&:hover" : {
            color : "#3f51b5"
        }
    },
    baseButton : {
        width : "100%",
        borderRadius : '5px'
    },
    buttonIcon : {
        width : "40%",
        pointerEvents : 'none'
    }
});


const CardElement = ( { label , icon , link , ...rest} ) => {
    const history = useHistory();
    const classes = useStyles();
    // if use event here without return this function always called with component render
    const handleClick =( link ) => {
       history.push(link);
    }
    return (
        <ButtonBase className={classes.baseButton}  onClick={ (  ) => { handleClick(  link )} }>
            <Card className={classes.root} { ...rest }>
                <CardContent>
                    <img className={classes.buttonIcon} src={ require('../../../assets/images/icons/'+icon).default } alt={ label }/>
                    <h4>{ label }</h4>
                </CardContent>
            </Card>
        </ButtonBase>
    );
}


CardElement.defaultProps = {
    label : "ស្វាគមន៍",
    icon  : "home",
    link  : "/"
}


export default CardElement;
