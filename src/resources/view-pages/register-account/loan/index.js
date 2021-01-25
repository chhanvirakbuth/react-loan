// ((======= core import ========= ))
import React, {useEffect} from 'react';
import InputElement from "../../../elements/input";

// ((======= library import ========= ))

// ((======= custom import ========= ))
import RegisterAccountLoanBreadCrumb from "./register-account-loan-breadcrumb";
import word from "../../../language/word";

const RegisterLoanAccountView = () => {

    //effect hook
    useEffect(() => {
        document.title = word.registerDepositAccount;
    });

    return (
        <div className={`animate__animated animate__fadeIn`}>
            <RegisterAccountLoanBreadCrumb/>
            <InputElement />
        </div>
    );
}

export default RegisterLoanAccountView;
