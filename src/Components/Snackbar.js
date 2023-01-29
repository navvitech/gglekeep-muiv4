import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
// import Slide from "@material-ui/core/Slide";
import { Grow, makeStyles } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Close } from "@material-ui/icons";

// function TransitionLeft(props) {
//   return <Slide {...props} direction="left" />;
// }
function GrowTransition(props) {
  return <Grow {...props} />;
}

const useStyles = makeStyles({
  root: {
    background: "#323232",
    height: "70px",
    width: "430px",
    display: "flex",
    alignItems: "center",
    fontWeight: "400",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
});

export default function CustomSnackbar({ open, setOpen }) {
  const classes = useStyles();

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={GrowTransition}
        autoHideDuration={2000}
        // key={transition ? transition.name : ""}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert
          action={
            <>
              <Button
                size="small"
                style={{
                  textTransform: "capitalize",
                  color: "yellow",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              >
                undo
              </Button>
              <Close
                fontSize="small"
                style={{ cursor: "pointer" }}
                onClick={handleClose}
              />
            </>
          }
          classes={{ root: classes.root }}
          icon={false}
          variant="filled"
          onClose={handleClose}
          severity="success"
        >
          Deleted note successfully
        </Alert>
      </Snackbar>
    </div>
  );
}
