// ((======= core import ========= ))
import React, {useEffect} from 'react';


// ((======= library import ========= ))

// ((======= custom import ========= ))
import InputElement from "../../elements/input";
import StatisticsReportBreadcrumb from "./statistics-report-breadcrumb";
import word from "../../language/word";

const StatisticsReportView = () => {

    //effect hook
    useEffect(() => {
        document.title = word.statisticReport;
    });

    return (
        <div className={`animate__animated animate__fadeIn`}>
            <StatisticsReportBreadcrumb/>
                <InputElement/>
        </div>
    );
}

export default StatisticsReportView;
