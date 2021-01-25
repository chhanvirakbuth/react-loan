// ((======= core import ========= ))
import React, {useEffect} from 'react';
import InputElement from "../../../elements/input";

// ((======= library import ========= ))

// ((======= custom import ========= ))
import RegisterAccountDepositBreadCrumb from "./register-account-deposit-breadcrumb";
import word from "../../../language/word";

const RegisterDepositAccountView = () => {

    //effect hook
    useEffect(() => {
        document.title = word.registerDepositAccount;
    });

    return (
        <div className={`animate__animated animate__fadeIn`}>
            <RegisterAccountDepositBreadCrumb/>
            <InputElement />
        </div>
    );
}

export default RegisterDepositAccountView;
