// ((======= core import ========= ))
import React, {useEffect} from 'react';
import InputElement from "../../../elements/input";

// ((======= library import ========= ))

// ((======= custom import ========= ))
import LoanMemberBreadcrumb from "./loan-member-breadcrumb";
import word from "../../../language/word";

const LoanMemberAccountView = () => {
    //effect hook
    useEffect(() => {
        document.title = word.loanMember;
    });

    return (
        <div className={`animate__animated animate__fadeIn`}>
            <LoanMemberBreadcrumb/>
            <InputElement />
        </div>
    );
}

export default LoanMemberAccountView;
