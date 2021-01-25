// ((======= core import ========= ))
import React, {useEffect} from 'react';


// ((======= library import ========= ))

// ((======= custom import ========= ))
import RegisterAccountDepositBreadCrumb from "./dashboard-breadcrumb";
import InputElement from "../../elements/input";
import word from "../../language/word";

const DashboardView = () => {
    //effect hook
    useEffect(() => {
        document.title = word.dashboard;
    });

    return (
        <div className={`animate__animated animate__fadeIn`}>
            <RegisterAccountDepositBreadCrumb/>
            <InputElement />
        </div>
    );
}

export default DashboardView;
