// ((======= core import ========= ))
import React from 'react';

// ((======= library import ========= ))
import Container from "@material-ui/core/Container";

// ((======= custom import ========= ))
import RoutePath from "../../config/route-path";
import RegisterDepositAccountView from "./register-account/deposit";
import RegisterLoanAccountView from "./register-account/loan";
import DashboardView from "./dashboard";
import DepositMemberAccountView from "./member/deposit";
import LoanMemberAccountView from "./member/loan";
import MonthlyDepositView from "./monthly-deposit";
import WithdrawDepositView from "./withdraw-deposit";
import PaidInterestView from "./paid-interest";
import ExtraLoanView from "./extra-loan";
import StatisticsReportView from "./statistics-report";
import SettingView from "./setting";

const MainContentView = ( props ) => {
    const path = props.location.pathname; //pathname: "/app/dashboard" as example
    let componentRender = "Not found";
    // check route
    switch ( path ) {
        // dashboard
        case RoutePath.dashboard:
            componentRender = <DashboardView/>;
            break;
        // register deposit account
        case RoutePath.registerDepositAccount:
            componentRender = <RegisterDepositAccountView/>;
            break;
        // register loan account
        case RoutePath.registerLoanAccount:
            componentRender = <RegisterLoanAccountView/>;
            break;
        // monthly deposit , saving
        case RoutePath.monthlyDeposit:
            componentRender = <MonthlyDepositView/>;
            break;

        case RoutePath.withdrawDeposit:
            componentRender = <WithdrawDepositView/>;
            break;

        case RoutePath.loanMember:
            componentRender = <LoanMemberAccountView/>;
            break;

        case RoutePath.depositMember:
            componentRender = <DepositMemberAccountView/>;
            break;

        case RoutePath.extraLoan:
            componentRender = <ExtraLoanView/>;
            break;

        case RoutePath.paidInterest:
            componentRender = <PaidInterestView/>;
            break;

        case RoutePath.statisticReport:
            componentRender = <StatisticsReportView/>;
            break;

        case RoutePath.settings:
            componentRender = <SettingView/>;
            break;

        default :
            break;
    }
    return (
        <>
            <Container maxWidth="lg">
                {componentRender}
            </Container>
        </>
    );
}

export default MainContentView;
