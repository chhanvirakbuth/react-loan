const path = process.env.REACT_APP_APP_BASE_PATH
const RoutePath = {
    home                    : `/home`,
    dashboard               : `${path}/dashboard`,
    registerDepositAccount  : `${path}/register-deposit-account`,
    registerLoanAccount     : `${path}/register-loan-account`,
    depositMember           : `${path}/deposit-member`,
    loanMember              : `${path}/loan-member`,
    monthlyDeposit          : `${path}/monthly-deposit`,
    withdrawDeposit         : `${path}/withdraw-deposit`,
    paidInterest            : `${path}/paid-interest`,
    extraLoan               : `${path}/extra-loan`,
    statisticReport         : `${path}/statistic-report`,
    settings                : `${path}/setting`,
    login                   : `/espresso/auth/login`
}

export default RoutePath;
