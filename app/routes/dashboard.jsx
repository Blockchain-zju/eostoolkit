// Primary components
import CreateSelf from "components/Features/CreateSelfForm";
import CreateAccount from "components/Features/CreateAccountForm";
import CreateProxy from "components/Features/CreateProxyForm";
import ResignProxy from "components/Features/ResignProxyForm";
import SetProxy from "components/Features/SetProxyForm";
import RamForm from "components/Features/RamForm";
import StakeForm from "components/Features/StakeForm";
import Refund from "components/Features/RefundForm";
import Transfer from "components/Features/TransferForm";
import SimplePermissions from "components/Features/SimplePermissionsForm";
import ComplexPermissions from "components/Features/ComplexPermissionsForm";
import LinkAuth from "components/Features/LinkAuthForm";
import ClaimRewards from "components/Features/ClaimRewardsForm";
import BidName from "components/Features/BidNameForm";
import Airgrab from "components/Features/AirgrabForm";
import Donate from "components/Features/DonateForm";
import VotingTable from "containers/NetworkProducers";
import DappsPage from "components/Dapps";

// EOSIO FORUM
import ForumStatus from "components/Features/ForumForms/Status";
import ForumPost from "components/Features/ForumForms/Post";
import ForumProposal from "components/Features/ForumForms/Propose";
import ForumVote from "components/Features/ForumForms/Vote";

// MULTISIG - OFFLINE SIGN
import MultisigCreate from "components/Features/Multisig/Create";
import MultisigSign from "components/Features/Multisig/Sign";
import MultisigPush from "components/Features/Multisig/Push";

// containers
import Network from "containers/Network";
import SearchAccount from "containers/SearchAccount";

// Pages
import GovernancePage from "components/Pages/GovernancePage";
import FeaturesPage from "components/Pages/FeaturesPage";

// external Features
import ProxyTable from "containers/ProxyInfo";
import HorusPay from "containers/HorusPay";
import Karma from "containers/Karma";
import Grandpa from "containers/Grandpa";

// @material-ui/icons
import {
  Dashboard,
  AccountBalance,
  Search,
  PersonAdd,
  AssignmentInd,
  AssignmentTurnedIn,
  Payment,
  DeveloperBoard,
  Forum,
  Favorite,
  CloudDownload,
  Settings,
  VpnKey,
  Games,
  Home
} from "@material-ui/icons";
import HorusIcon from "components/Icons/Horus";
import KarmaIcon from "components/Icons/Karma";

const dashRoutes = [
  { hide: true, path: "/networks", name: "切换网络", component: Network },
  {
    path: "/home",
    name: "首页",
    icon: Home,
    component: FeaturesPage
  },
  // {
  //   path: '/grandpacoins',
  //   name: 'GrandpaCoins',
  //   icon: Games,
  //   component: Grandpa,
  // },
  // {
  //   path: '/donate',
  //   name: 'Donate',
  //   icon: Favorite,
  //   component: Donate,
  // },
  {
    path: "/account/create",
    name: "创建账户",
    icon: PersonAdd,
    component: CreateSelf
  },
  {
    path: "/account/helpcreate",
    name: "帮助他人创建账户",
    icon: PersonAdd,
    component: CreateAccount
  },
  {
    collapse: true,
    path: "/account",
    name: "账户管理",
    state: "openAccount",
    icon: AssignmentInd,
    views: [
      {
        path: "/account/delegate",
        name: "CPU&NET资源质押",
        mini: "MS",
        component: StakeForm
      },
      {
        path: "/account/ram",
        name: "RAM买卖",
        mini: "MR",
        component: RamForm
      },
      {
        path: "/account/permissions",
        name: "权限管理",
        mini: "P",
        component: SimplePermissions
      },
      {
        path: "/account/advanced",
        name: "复杂权限管理",
        mini: "AP",
        component: ComplexPermissions
      },
      {
        path: "/account/linkauth",
        name: "Action授权管理",
        mini: "LA",
        component: LinkAuth
      },
      {
        path: "/account/refund",
        name: "质押赎回",
        mini: "RS",
        component: Refund
      }
    ]
  },
  {
    path: "/transfer",
    name: "Token转账",
    icon: Payment,
    component: Transfer
  },
  {
    path: "/search",
    name: "搜索账户",
    icon: Search,
    component: SearchAccount
  },
  // {
  //   collapse: true,
  //   path: '/vote',
  //   name: 'Manage Voting',
  //   state: 'openVote',
  //   icon: AssignmentTurnedIn,
  //   views: [
  //     {
  //       path: '/vote/producers',
  //       name: 'Vote Producers',
  //       mini: 'VP',
  //       component: VotingTable,
  //     },
  //     {
  //       path: '/vote/proxies',
  //       name: 'Proxy Information',
  //       mini: 'PI',
  //       component: ProxyTable,
  //     },
  //     {
  //       path: '/vote/setproxy',
  //       name: 'Set Proxy',
  //       mini: 'SP',
  //       component: SetProxy,
  //     },
  //     {
  //       path: '/vote/createproxy',
  //       name: 'Create Proxy',
  //       mini: 'CP',
  //       component: CreateProxy,
  //     },
  //     {
  //       path: '/vote/resignproxy',
  //       name: 'Resign Proxy',
  //       mini: 'RP',
  //       component: ResignProxy,
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   path: "/community",
  //   name: "Community Features",
  //   state: "openCommunity",
  //   icon: Forum,
  //   views: [
  //     {
  //       path: "/community/forum/status",
  //       name: "Forum Status",
  //       mini: "FS",
  //       component: ForumStatus
  //     },
  //     {
  //       path: "/community/forum/post",
  //       name: "Forum Post",
  //       mini: "FP",
  //       component: ForumPost
  //     },
  //     {
  //       path: "/community/forum/proposal",
  //       name: "Forum Proposal",
  //       mini: "Pr",
  //       component: ForumProposal
  //     },
  //     {
  //       path: "/community/forum/vote",
  //       name: "Forum Vote",
  //       mini: "FV",
  //       component: ForumVote
  //     },
  //     {
  //       path: "/community/bidname",
  //       name: "Premium Names",
  //       mini: "PN",
  //       component: BidName
  //     }
  //   ]
  // },
  {
    collapse: true,
    path: "/multisig",
    name: "多重签名交易",
    state: "openMultisig",
    icon: VpnKey,
    views: [
      {
        path: "/multisig/create",
        name: "创建交易",
        mini: "CT",
        component: MultisigCreate
      },
      {
        path: "/multisig/sign",
        name: "签名交易",
        mini: "ST",
        component: MultisigSign
      },
      {
        path: "/multisig/push",
        name: "发送交易",
        mini: "PT",
        component: MultisigPush
      }
    ]
  },
  {
    path: "/governance",
    name: "EOS治理公约",
    icon: AccountBalance,
    component: GovernancePage
  },
  { redirect: true, path: "/", pathTo: "/home", name: "Home" },
  { redirect: true, path: "/account/buyram", pathTo: "/account/ram", name: "Buy RAM" },
  { redirect: true, path: "/account/sellram", pathTo: "/account/ram", name: "Sell RAM" }
];
export default dashRoutes;
