import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  AddAlertOutlined,
  Apps,
  ArchiveOutlined,
  Close,
  DeleteOutline,
  MoreVert,
  PaletteOutlined,
  Refresh,
  Search,
  Settings,
  ViewAgendaOutlined,
} from "@material-ui/icons";
import BulbIcon from "../../assets/Bulb";
import ArchiveIcon from "../../assets/Archive";
import BinIcon from "../../assets/Bin";
import NotificationIcon from "../../assets/Notification";
import EditIcon from "../../assets/Edit";
import { Avatar, InputBase, Slide, useMediaQuery } from "@material-ui/core";
// import Picker from "../Pickeres/Picker";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  // expand: {
  //   transition: "2s",
  //   transform: "translateY(-100%)",
  //   zIndex: theme.zIndex.drawer + 1,
  // },
  // expandOpen: {
  //   transform: "translateY(0)",
  // },
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    color: "black",
    background: "white",
    boxShadow: "none",
    borderBottom: "1px solid lightgray",
  },

  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    border: "none",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerClose: {
    border: "none",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  search: {
    position: "relative",
    borderRadius: "10px",
    background: "#F1F3F4",
    padding: "5px",
    display: "flex",
    alignItems: "center",
    flex: 0.63,
    // "&:hover": {
    //   backgroundColor: fade(theme.palette.common.white, 0.25),
    // },
    marginLeft: 0,
    width: "86%",
    [theme.breakpoints.down("sm")]: {
      // marginLeft: theme.spacing(1),
      // width: "auto",
      display: "none",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "0ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  headerIconColor: {
    color: "#5f6368",
    [theme.breakpoints.up("sm")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      margin: "0 4px",
    },
  },
  sidebarIconColor: {
    color: "#202124",
  },
  selected: {
    background: "inherit",
    color: "inherit",
    border: "inherit",
    borderTopRightRadius: "50px",
    borderBottomRightRadius: "50px",
    "&:hover": {
      background: "rgba(0,0,0,0.05)",
    },
  },
  content: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3),
    },
    background: "white",
  },
  logo: {
    [theme.breakpoints.up("sm")]: {
      width: "24px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "20px",
    },
  },
  heading: {
    fontWeight: "500",
    margin: "0 15px",
    color: "#5f6368",
    [theme.breakpoints.up("sm")]: {
      fontSize: "22px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },
  middle: {
    [theme.breakpoints.up("md")]: {
      flex: 0.2,
    },
    [theme.breakpoints.down("sm")]: {
      flex: 0.5,
    },
  },
  // right: {
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   [theme.breakpoints.up("md")]: {
  //     flex: 0.3,
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     flex: 0.25,
  //   },
  // },
}));

export default function MiniDrawer({ children, open, setOpen, numSelected }) {
  const theme = useTheme();

  const classes = useStyles();
  const data = [
    {
      text: "Notes",
      Icon: <BulbIcon className={classes.sidebarIconColor} />,
      path: "/",
    },
    {
      text: "Reminders",
      Icon: <NotificationIcon className={classes.sidebarIconColor} />,
      path: "/reminders",
    },
    {
      text: "Edit labels",
      Icon: <EditIcon className={classes.sidebarIconColor} />,
      path: "/editLables",
    },
    {
      text: "Archive",
      Icon: <ArchiveIcon className={classes.sidebarIconColor} />,
      path: "/archieve",
    },
    {
      text: "Bin",
      Icon: <BinIcon className={classes.sidebarIconColor} />,
      path: "/bin",
    },
  ];

  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      {numSelected ? (
        <SelectedAppBar numSelected={numSelected} />
      ) : (
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            className={classes.toolbarComp}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                // border: "2px dashed green",
                flex: 0.17,
              }}
            >
              <Hidden xsDown implementation="css">
                <IconButton
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
              <Hidden smUp implementation="css">
                <IconButton
                  aria-label="drawer"
                  onClick={handleDrawerToggle}
                  edge="start"
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
              <img src={logo} alt="" className={classes.logo} />
              <p className={classes.heading}>Keep</p>
            </div>
            {/* <div style={{ flex: 0.63 }}> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            {/* </div> */}
            <div
              className={classes.middle}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flex: 0.7,
                }}
              >
                <Refresh className={classes.headerIconColor} />
                <ViewAgendaOutlined className={classes.headerIconColor} />
                <Settings className={classes.headerIconColor} />
              </div>
              <div
                style={{
                  display: "flex",
                  flex: 0.3,
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
                className={classes.right}
              >
                <Apps className={classes.headerIconColor} />
                <Avatar style={{ marginLeft: "7px" }} />
              </div>
            </div>
          </Toolbar>
        </AppBar>
      )}
      {/* <Divider /> */}

      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "05px 20px",
              border: "5px solid orangered",
            }}
            className={classes.toolbar}
          >
            <img src={logo} alt="" width="50px" />
            <h2>Navkeep</h2>
          </div>

          <List style={{ marginLeft: "7px" }}>
            {data.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                exact
                activeStyle={{
                  background: "#FEEFC3",
                  // borderLeft: "4px solid orangered",
                }}
              >
                <ListItem button key={item.text} className={classes.selected}>
                  <ListItemIcon>{item.Icon}</ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    disableTypography
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#232124",
                    }}
                  />
                </ListItem>
              </NavLink>
            ))}
          </List>
        </Drawer>
      </Hidden>

      <Hidden xsDown implementation="css">
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}></div>
          <List style={{ marginLeft: "7px" }}>
            {data.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                exact
                activeStyle={{
                  background: "#FEEFC3",
                  // borderLeft: "4px solid orangered",
                }}
              >
                <ListItem button key={item.text} className={classes.selected}>
                  <ListItemIcon>{item.Icon}</ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    disableTypography
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#232124",
                    }}
                  />
                </ListItem>
              </NavLink>
            ))}
          </List>
        </Drawer>
      </Hidden>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

const SelectedAppBar = ({ numSelected }) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const classes = useStyles();
  const fStyle = { display: "flex", alignItems: "center" };
  return (
    <>
      <Slide in={Boolean(numSelected)} timeout={500} direction="left">
        <AppBar className={classes.appBar} style={{ background: "red" }}>
          <Toolbar
            disableGutters={matches && true}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={fStyle}>
              <IconButton>
                <Close style={{ color: "white" }} />
              </IconButton>
              <p
                style={{ fontSize: "17px", fontWeight: "600", color: "white" }}
              >
                {numSelected} selected
              </p>
            </div>
            <div style={fStyle}>
              <IconButton size={matches ? "small" : "medium"}>
                <AddAlertOutlined style={{ color: "white" }} />
              </IconButton>
              <IconButton size={matches ? "small" : "medium"}>
                <PaletteOutlined style={{ color: "white" }} />
              </IconButton>
              <IconButton size={matches ? "small" : "medium"}>
                <ArchiveOutlined style={{ color: "white" }} />
              </IconButton>
              <IconButton size={matches ? "small" : "medium"}>
                <DeleteOutline style={{ color: "white" }} />
              </IconButton>
              <IconButton size={matches ? "small" : "medium"}>
                <MoreVert style={{ color: "white" }} />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Slide>
    </>
  );
};
