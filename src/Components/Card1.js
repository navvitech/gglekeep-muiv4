import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import {
  AddAlertOutlined,
  ArchiveOutlined,
  GroupAddOutlined,
  MoreVert,
  PhotoOutlined,
  PaletteOutlined,
  PinDrop,
  PinDropOutlined,
} from "@material-ui/icons";
import Menu1 from "./Menu1";
import Modal1 from "./Modal1";
import { Checkbox, useMediaQuery } from "@material-ui/core";
import { motion } from "framer-motion";

export default function RecipeReviewCard({
  src,
  note,
  title,
  Id,
  selected,
  data,
  setData,
  numSelected,
  setNumSelected,
  pinned,
}) {
  const matches = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "100%",
      width: "240px",
      position: "relative",
      border: "1px solid lightgray",
      boxShadow: "none",
      borderRadius: 10,
      "&:hover": {
        boxShadow:
          "0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)",
      },
      [theme.breakpoints.down("md")]: {
        width: "95%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    media: {
      height: "100%",
      width: "100%",
    },
    cardActionsRoot: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
    IconButtonroot: {
      "&:hover": {
        background: "rgba(0,0,0,0.2)",
      },
      padding: "6px",
      color: "#232124",
    },
    outer: {
      "&:hover $checkIcon": {
        // display: "flex",
        opacity: 1,
        position: "absolute",
        zIndex: "1",
      },
      // transition: "1s",
    },
    checkIcon: {
      transition: "700ms",
      display: "flex",
      opacity: numSelected || matches ? 1 : 0,
      position: "absolute",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
    },
    selected: {
      border: "4px solid #FFBB00",
    },
  }));
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(false);
  const [modal, setModal] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const toggleCheck = (e) => {
    let checked = e.target.checked;
    setData(
      data.map((item) => {
        if (item.id === Id) {
          item.selected = checked;
        }
        return item;
      })
    );
    const selectedKeeps = data.filter((item) => item.selected === true);
    setNumSelected(selectedKeeps.length);
  };
  const pin = () => {
    setData(
      data.map((item) => {
        if (item.id === Id) {
          item.pinned = !item.pinned;
        }
        return item;
      })
    );
  };
  const CardHeaderComp = () => {
    return (
      <>
        <div className={classes.checkIcon}>
          <Checkbox
            style={{ color: "white" }}
            checked={selected}
            onChange={toggleCheck}
          />
          <IconButton onClick={pin}>
            {pinned ? (
              <PinDrop style={{ color: "white" }} />
            ) : (
              <PinDropOutlined style={{ color: "white" }} />
            )}
          </IconButton>
        </div>
      </>
    );
  };
  return (
    <motion.div className={classes.outer}>
      <Card
        className={clsx(classes.root, {
          [classes.selected]: selected,
        })}
      >
        <CardHeader component={CardHeaderComp} />
        <motion.div
          onClick={() => {
            setModal(true);
            // setId(Id);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          {src && <img src={src} alt="" className={classes.media} />}
          <CardContent>
            <p style={{ fontWeight: "600", fontSize: "17px" }}>{title}</p>
            <p style={{ fontWeight: "400", fontSize: "15px" }}>{note}</p>
          </CardContent>
        </motion.div>
        <CardActions
          className={classes.cardActionsRoot}
          // className="cardActionsRoot"
        >
          <IconButton size="small" classes={{ root: classes.IconButtonroot }}>
            <AddAlertOutlined fontSize="small" />
          </IconButton>
          <IconButton size="small" classes={{ root: classes.IconButtonroot }}>
            <GroupAddOutlined fontSize="small" />
          </IconButton>
          <IconButton size="small" classes={{ root: classes.IconButtonroot }}>
            <PaletteOutlined fontSize="small" />
          </IconButton>
          <IconButton size="small" classes={{ root: classes.IconButtonroot }}>
            <PhotoOutlined fontSize="small" />
          </IconButton>
          <IconButton size="small" classes={{ root: classes.IconButtonroot }}>
            <ArchiveOutlined fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            classes={{ root: classes.IconButtonroot }}
            onClick={handleClick}
          >
            <MoreVert fontSize="small" />
          </IconButton>
          <Menu1 setAnchorEl={setAnchorEl} anchorEl={anchorEl} />
        </CardActions>
      </Card>
      <Modal1 setModal={setModal} modal={modal} IDd={Id} />
    </motion.div>
  );
}

// className={clsx(classes.expand, {
//   [classes.expandOpen]: expanded
// })}

// expand: {
//   transition: "1s",
//   transform:'translateY(-100%)'
// },
// expandOpen: {
//   transform: "translateY(0)",
// }
