
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import word from "../../../../language/word";
import RegisterDepositStep1 from "./step1";
import RegisterDepositStep2 from "./step2";
import RegisterDepositStep3 from "./step3";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    const { generalInfo , attachment , reviewAndFinish } = word;
    return [generalInfo, attachment,  reviewAndFinish];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return <RegisterDepositStep1/>;
        case 1:
            return <RegisterDepositStep2/>;
        case 2:
            return <RegisterDepositStep3/>;
        default:
            return 'Unknown stepIndex';
    }
}

export default function RegisterAccountDepositStepper() {
    const classes = useStyles();
    const [activeStep ] = React.useState(0);
    const steps = getSteps();

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {getStepContent(activeStep)}
            </div>
        </div>
    );
}
