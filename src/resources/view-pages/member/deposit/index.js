// ((======= core import ========= ))
import React, {useEffect} from 'react';

// ((======= library import ========= ))

// ((======= custom import ========= ))
import DepositMemberBreadCrumb from "./deposit-member-breadcrumb";
import word from "../../../language/word";
import ListDepositMember from "./list";

const DepositMemberAccountView = () => {
    //effect hook
    useEffect(() => {
        document.title = word.depositMember;
    });

    return (
        <div className={`animate__animated animate__fadeIn`}>
            <DepositMemberBreadCrumb/>
            <ListDepositMember/>
        </div>
    );
}

export default DepositMemberAccountView;
