// ((======= core import ========= ))
import React, {useEffect} from 'react';

// ((======= library import ========= ))
import {makeStyles} from "@material-ui/core/styles";

// ((======= custom import ========= ))
import RegisterAccountDepositBreadCrumb from "./register-account-deposit-breadcrumb";
import word from "../../../language/word";
import SimpleCard from "../../../elements/card/simple-card";
import RegisterAccountDepositStepper from "./stepper";


const useStyles = makeStyles({
    margin: {
        marginTop: '20px',
    },
    noMargin : {
        marginBlockStart : 0,
        marginBlockEnd   : 0
    }
});

const RegisterDepositAccountView = () => {
    const classes = useStyles();
    //effect hook
    useEffect(() => {
        document.title = word.registerDepositAccount;
    });

    return (
        <div className={`animate__animated animate__fadeIn`}>
            <RegisterAccountDepositBreadCrumb/>
            {/*<InputElement />*/}
            <div className={classes.margin}/>
            {/*add card*/}
            <SimpleCard>
                {/*header label*/}
                <h3 className={classes.noMargin}>{ word.registerDepositAccountLabel}</h3>
                <h6 className={classes.noMargin}>{ word.customerInfo}</h6>
                <RegisterAccountDepositStepper/>
            </SimpleCard>
        </div>
    );
}

export default RegisterDepositAccountView;
