import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Button } from "@mui/material";
import { useAuthUser } from "react-auth-kit";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { FaTruck } from "react-icons/fa6";
import { IoCreate } from "react-icons/io5";
import { GiConfirmed } from "react-icons/gi";
import { ImStatsBars } from "react-icons/im";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { MdManageAccounts } from "react-icons/md";

//TransactionStaff
import CreateOrder from "../functions/transactionStaff/CreateOrder";
import ShippingOrder from "../functions/transactionStaff/ShippingOrder";
import Confirm from "../functions/transactionStaff/Confirm";
import Statistics from "../functions/transactionStaff/Statistics";

//admin
import AccountManagement from "../functions/admin/AccountManagement";
import CreateAccount from "../functions/admin/CreateAccount";
import StatisticsAdmin from "../functions/admin/StatisticsAdmin";

//gatheringStaff
import ConfirmGathering from "../functions/gatheringStaff/ConfirmGathering";

//TransactionAdmin
import CreateAccountTranAdmin from "../functions/transactionAdmin/CreateAccountTranAdmin";
import StatisticsTranAdmin from "../functions/transactionAdmin/StatisticsTranAdmin";

//GatheringAdmin
import CreateAccountGatheringAdmin from "../functions/gatheringAdmin/CreateAccountGatheringAdmin";
import StatisticsGatheringAdmin from "../functions/gatheringAdmin/StatisticsGatheringAdmin";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Menu() {
  const theme = useTheme();

  const navigate = useNavigate();
  const auth = useAuthUser();
  const role = auth().data?.role;

  const [open, setOpen] = React.useState(true);
  const [title, setTitle] = React.useState("");
  const [tab, setTab] = React.useState(0);

  const transactionStaffMenu = [
    { name: "Tạo đơn hàng", Icon: IoCreate },
    { name: "Chuyển hàng", Icon: FaTruck },
    { name: "Xác nhận", Icon: GiConfirmed },
    { name: "Thống kê", Icon: ImStatsBars },
  ];
  const transactionAdminMenu = [
    { name: "Tạo tài khoản", Icon: IoCreate },
    { name: "Thống kê", Icon: ImStatsBars },
  ];
  const gatheringStaffMenu = [{ name: "xác nhận đơn hàng", Icon: ImStatsBars }];
  const gatheringAdminMenu = [
    { name: "Tạo tài khoản", Icon: IoCreate },
    { name: "Thống kê", Icon: IoCreate },
  ];
  const adminMenu = [
    { name: "Quản lí tài khoản", Icon: MdManageAccounts },
    { name: "Tạo tài khoản", Icon: IoCreate },
    { name: "Thống kê", Icon: ImStatsBars },
  ];

  const functions =
    role === "transactionStaff"
      ? transactionStaffMenu
      : role === "transactionAdmin"
      ? transactionAdminMenu
      : role === "gatheringStaff"
      ? gatheringStaffMenu
      : role === "gatheringAdmin"
      ? gatheringAdminMenu
      : role === "admin"
      ? adminMenu
      : "";
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleTitle = (e, text) => {
    e.persist();
    setTitle(text);
  };
  const handleToggle = (e, index) => {
    e.persist();
    setTab(index);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">{title}</Typography>
          <div className="appbar div">
            <Button
              variant="contained"
              sx={{
                fontWeight: "bold",
                background: "#fdfdfd",
                color: "#003e29",
                marginLeft: "20px",
              }}
            >
              <AccountCircleIcon />
            </Button>
            <Button
              variant="contained"
              sx={{ background: "#fdfdfd", color: "black" }}
              onClick={() => {
                document.cookie =
                  "_auth=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
                document.cookie =
                  "_auth_storage=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
                document.cookie =
                  "_auth_state=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
                document.cookie =
                  "_auth_type=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

                navigate("/login");
              }}
            >
              Đăng xuất
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography variant="h5">
            <b>Magic Post</b>
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          {functions.map(({ name: text, Icon }, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={(e) => {
                  handleTitle(e, text);
                  handleToggle(e, index);
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Icon sx={{ color: "#003e29" }} />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {role === "transactionStaff" && (
          <>
            {tab === 0 ? <CreateOrder /> : null}
            {tab === 1 ? <ShippingOrder /> : null}
            {tab === 2 ? <Confirm /> : null}
            {tab === 3 ? <Statistics /> : null}
          </>
        )}
        {role === "admin" && (
          <>
            {tab === 0 ? <AccountManagement /> : null}
            {tab === 1 ? <CreateAccount /> : null}
            {tab === 2 ? <StatisticsAdmin /> : null}
          </>
        )}
        {role === "transactionAdmin" && (
          <>
            {tab === 0 ? <CreateAccountTranAdmin /> : null}
            {tab === 1 ? <StatisticsTranAdmin /> : null}
          </>
        )}
        {role === "gatheringAdmin" && (
          <>
            {tab === 0 ? <CreateAccountGatheringAdmin /> : null}
            {tab === 1 ? <StatisticsGatheringAdmin /> : null}
          </>
        )}
        {role === "gatheringStaff" && (
          <>{tab === 0 ? <ConfirmGathering /> : null}</>
        )}
      </Main>
    </Box>
  );
}
