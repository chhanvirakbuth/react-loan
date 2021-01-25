// ((======= core import ========= ))
import React, {useEffect} from 'react';


// ((======= library import ========= ))

// ((======= custom import ========= ))

import InputElement from "../../elements/input";
import PaidInterestBreadcrumb from "./paid-interest-breadcrumb";
import word from "../../language/word";


const PaidInterestView = () => {

    //effect hook
    useEffect(() => {
        document.title = word.paidInterest;
    });

    return (
        <div className={`animate__animated animate__fadeIn`}>
            <PaidInterestBreadcrumb/>
            <InputElement />
        </div>
    );
}

export default PaidInterestView;
