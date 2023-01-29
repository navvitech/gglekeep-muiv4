import React from "react";
// import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// import CustomDialog from "./Dialogue";
import CustomSnackbar from "./Snackbar";

// const options = [
//   "Delete note",
//   "Add label",
//   "Add drawing",
//   "Make a copy",
//   "Hide tick boxes",
//   "Grab image text",
//   "Copy to Google Docs",
// ];

export default function SimpleMenu({ anchorEl, setAnchorEl }) {
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = React.useState(false);
  const deleteNote = () => {
    setOpen(true);
    handleClose();
  };

  return (
    <div>
      {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button> */}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "22ch",
          },
        }}
        BackdropProps={{
          invisible: true,
          // width: "90vw",
        }}

        // hideBackdrop
      >
        <MenuItem
          style={{ fontSize: "13.5px", minHeight: "35px" }}
          onClick={deleteNote}
        >
          Delete note
        </MenuItem>
        <MenuItem style={{ fontSize: "13.5px", minHeight: "35px" }}>
          Add label
        </MenuItem>
        <MenuItem style={{ fontSize: "13.5px", minHeight: "35px" }}>
          Add drawing
        </MenuItem>
        <MenuItem style={{ fontSize: "13.5px", minHeight: "35px" }}>
          Make a copy
        </MenuItem>
        <MenuItem style={{ fontSize: "13.5px", minHeight: "35px" }}>
          Hide tick boxes
        </MenuItem>
        <MenuItem style={{ fontSize: "13.5px", minHeight: "35px" }}>
          Grab image text
        </MenuItem>
        <MenuItem style={{ fontSize: "13.5px", minHeight: "35px" }}>
          Copy to Google Docs
        </MenuItem>
      </Menu>
      <CustomSnackbar open={open} setOpen={setOpen} />
      {/* <CustomDialog open={open} setOpen={setOpen} /> */}
    </div>
  );
}
