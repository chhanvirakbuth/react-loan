// ((======= core import ========= ))
import React, {useEffect} from 'react';


// ((======= library import ========= ))

// ((======= custom import ========= ))

import InputElement from "../../elements/input";
import MonthlyDepositBreadcrumb from "./monthly-deposit-breadcrumb";
import word from "../../language/word";

const MonthlyDepositView = () => {
    //effect hook
    useEffect(() => {
        document.title = word.monthlyDeposit;
    });

    return (
        <div className={`animate__animated animate__fadeIn`}>
            <MonthlyDepositBreadcrumb/>
            <InputElement />
        </div>
    );
}

export default MonthlyDepositView;
