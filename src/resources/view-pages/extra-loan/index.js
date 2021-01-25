// ((======= core import ========= ))
import React, {useEffect} from 'react';


// ((======= library import ========= ))

// ((======= custom import ========= ))
import ExtraLoanBreadcrumb from "./extra-loan-breadcrumb";
import InputElement from "../../elements/input";
import word from "../../language/word";

const ExtraLoanView = () => {
    //effect hook
    useEffect(() => {
        document.title = word.extraLoan;
    });

    return (
        <div className={`animate__animated animate__fadeIn`}>
            <ExtraLoanBreadcrumb/>
                <InputElement/>
        </div>
    );
}

export default ExtraLoanView;
