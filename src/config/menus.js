import RoutePath from "./route-path";

const Menus = [
    {
        key   : "1136ecda-4417-43d8-b477-45941f062e56",
        label : "ផ្ទាំងព័ត៍មាន",
        icon  : "statistics.svg",
        link  : RoutePath.dashboard
    },
    {
        key   : "7cade25a-0d17-49eb-8119-f82656c6a6f3",
        label : "បើកគណនីសន្សំ",
        icon  : "bank.svg",
        link  : RoutePath.registerDepositAccount
    },
    {
        key   : "539f1d2b-27f1-409c-b086-6fffde65e160",
        label : "បើកគណនីកម្ចី",
        icon  : "bank-check.svg",
        link  : RoutePath.registerLoanAccount
    },
    {
        key   : "3ad01140-9b16-4d45-8226-0184b0cfd7b0",
        label : "សមាជិកសន្សំ",
        icon  : "consumer.svg",
        link  : RoutePath.depositMember
    },
    {
        key   : "ee3663f0-5f89-40d6-87e2-0844019059bd",
        label : "សមាជិកកម្ចី",
        icon  : "customer.svg",
        link  : RoutePath.loanMember
    },
    {
        key   : "aea2e34a-51e1-49b5-84cf-5985909d99f7",
        label : "ដាក់ប្រាក់សន្សំ",
        icon  : "piggy-bank.svg",
        link  : RoutePath.monthlyDeposit
    },
    {
        key   : "5ffb17a5-01d2-4475-8812-cf40be7a4c34",
        label : "ដកប្រាក់សន្សំ",
        icon  : "withdrawal.svg",
        link  : RoutePath.withdrawDeposit
    },
    {
        key   : "86a29b46-d25a-4530-b1e8-60894c51c305",
        label : "បង់ការប្រាក់",
        icon  : "payment.svg",
        link  : RoutePath.paidInterest
    },
    {
        key   : "5926ba2c-fffc-42ef-8a13-e1c547c23f54",
        label : "ខ្ចីថែម",
        icon  : "pay.svg",
        link  : RoutePath.extraLoan
    },
    {
        key   : "1281516e-7683-4bd8-bf79-df7df1701013",
        label : "របាយការណ៍",
        icon  : "statistics.svg",
        link  : RoutePath.statisticReport
    },
    {
        key   : "47643e84-ddb6-452c-b740-0638f026263b",
        label : "កំណត់ប្រព័ន្ធ",
        icon  : "cogwheel.svg",
        link  : RoutePath.settings
    },
];

export default Menus;
