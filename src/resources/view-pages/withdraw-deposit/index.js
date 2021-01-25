// ((======= core import ========= ))
import React, {useEffect} from 'react';


// ((======= library import ========= ))

// ((======= custom import ========= ))

import InputElement from "../../elements/input";
import WithdrawDepositBreadcrumb from "./withdraw-deposit-breadcrumb";
import word from "../../language/word";


const WithdrawDepositView = () => {

    //effect hook
    useEffect(() => {
        document.title = word.withdrawDeposit;
    });

    return (
        <div className={`animate__animated animate__fadeIn`}>
            <WithdrawDepositBreadcrumb/>
            <InputElement />
        </div>
    );
}

export default WithdrawDepositView;
