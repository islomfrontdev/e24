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
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DrawerWrapper from "./DrawerWrapper";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import AddForm from "../../pages/Admin/Add/add";
import Statement from "../../pages/Admin/statement";
import Deliveried from "../../pages/Admin/deliveried";
import Statistic from "../../pages/Admin/statistic";
import Using from "../../pages/Admin/using";


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
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [page, setPage] = React.useState("/");
  const Outlet = props.Outlet;
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const Page = (text) => {
    navigate(text);
  };
  return (
    <DrawerWrapper>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar open={open}>
          <Toolbar className="d-flex justify-content-between">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography className="ms-auto">
              <div className="profile  d-flex align-items-center fw-bold fs-5">
                <div className="userImg d-flex align-items-center justify-content-center rounded-circle border-dark p-0 me-2">
                  <AccountCircleIcon sx={{ fontSize: "45px" }} />
                </div>
                <span>Axrorjon</span>
                {/* Place for pannel */}
              </div>
            </Typography>
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
          <DrawerHeader
            sx={{
              background: "#fffced",
            }}
          >
            <Link to="/">
              <img
                className="w-100"
                src="https://express24.uz/img/header-logo.svg"
                alt="Express 24"
              />
            </Link>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List
            sx={{
              background: "#fffced",
              heigth: "100vh",
              height: "100vh",
            }}
          >
            {[
              "Arizalar",
              "Yetkazilgan",
              "Statistika",
              "Qo'shish",
              "Foydalanish",
            ].map((text, index) => (
              <ListItem button key={text} onClick={() => Page(text)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Typography paragraph>
            <Routes>
              <Route path="Arizalar" element={<Statement />} />
              <Route path="Yetkazilgan" element={<Deliveried />} />
              <Route path="Qo'shish" element={<AddForm />} />
              <Route path="Statistika" element={<Statistic />} />
              <Route path="Foydalanish" element={<Using />} />
            </Routes>
          </Typography>
        </Main>
      </Box>
    </DrawerWrapper>
  );
}
