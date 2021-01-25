// ((======= core import ========= ))
import React, {useEffect} from 'react';


// ((======= library import ========= ))

// ((======= custom import ========= ))
import InputElement from "../../elements/input";
import SettingBreadcrumb from "./setting-breadcrumb";
import word from "../../language/word";


const SettingView = () => {

    //effect hook
    useEffect(() => {
        document.title = word.settings;
    });

    return (
        <div className={`animate__animated animate__fadeIn`}>
            <SettingBreadcrumb/>
                <InputElement/>
        </div>
    );
}

export default SettingView;
