import {
  Button,
  Grid,
  IconButton,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import {
  BrushOutlined,
  CheckBoxOutlined,
  PhotoOutlined,
  AddAlertOutlined,
  ArchiveOutlined,
  GroupAddOutlined,
  MoreVert,
  PaletteOutlined,
  Undo,
  Redo,
  PinDropOutlined,
  Add,
} from "@material-ui/icons";
import { useState } from "react";

const CustomInput = ({
  setTitle,
  setNote,
  setData,
  note,
  title,
  // image,
  // setImage,
  data,
  open,
}) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  // matches && console.log(matches);
  const [show, setShow] = useState(false);
  const [image, setImage] = useState();
  const useStyles = makeStyles({
    input: {
      width: "100%",
      height: "100%",
      border: "none",
      outline: "none",
    },
    IconButtonroot: {
      "&:hover": {
        background: "rgba(0,0,0,0.2)",
      },
      color: "#232124",
    },
    button: {
      textTransform: "capitalize",
      color: "#232124",
      fontWeight: "600",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      marginTop: "10px",
      flexDirection: matches && "column",
      //   border: "2px solid orangered",
    },
  });
  const classes = useStyles();

  const handle = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    console.log(URL.createObjectURL(e.target.files[0]));
  };

  const addNote = () => {
    setData([
      ...data,
      {
        note: note,
        title: title,
        image: image,
        id: Math.floor(Math.random() * 100).toString(),
      },
    ]);
    console.log(data);
    setNote("");
    setTitle("");
    setImage("");
    setShow(false);
  };

  return (
    <Grid container justify="center" style={{ margin: "20px 0" }}>
      <Grid
        item
        xs={12}
        sm={10}
        md={8}
        lg={8}
        onDoubleClick={() => setShow(false)}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            //   height: "140px",
            justifyContent: "space-between",
            // width: "90%",
            flexDirection: "column",
            borderRadius: "10px",
            padding: "4px 15px",
            margin: "5px",
            boxShadow:
              "0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)",
          }}
        >
          {image && (
            <img
              src={image}
              alt=""
              width="104%"
              style={{
                borderRadius: "inherit",
                marginTop: "-4px",
              }}
            />
          )}
          {show && (
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                width: "100%",
                // border: "2px solid orangered",
              }}
            >
              <input
                type="text"
                placeholder="Title"
                className={classes.input}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div style={{ display: "flex" }}>
                <IconButton style={{ margin: "0 3px" }}>
                  <PinDropOutlined />
                </IconButton>
              </div>
            </div>
          )}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              // border: "2px solid orangered",
            }}
          >
            <input
              type="text"
              placeholder="Take a note..."
              className={classes.input}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              onClick={() => setShow(true)}
            />
            <div style={{ display: "flex" }}>
              <IconButton style={{ margin: "0 3px" }}>
                <CheckBoxOutlined />
              </IconButton>
              <IconButton style={{ margin: "0 3px" }}>
                <BrushOutlined />
              </IconButton>
              <IconButton style={{ margin: "0 3px" }}>
                <PhotoOutlined />
              </IconButton>
            </div>
          </div>
          {show && (
            <div className={classes.toolbar}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  flex: 0.7,
                }}
              >
                <IconButton
                  size={matches && "small"}
                  classes={{ root: classes.IconButtonroot }}
                >
                  <AddAlertOutlined fontSize="small" />
                </IconButton>
                <IconButton
                  size={matches && "small"}
                  classes={{ root: classes.IconButtonroot }}
                >
                  <GroupAddOutlined fontSize="small" />
                </IconButton>
                <IconButton
                  size={matches && "small"}
                  classes={{ root: classes.IconButtonroot }}
                >
                  <PaletteOutlined fontSize="small" />
                </IconButton>

                <input
                  accept="image/*"
                  className={classes.input}
                  id="icon-button-file"
                  type="file"
                  onChange={(e) => handle(e)}
                  style={{ display: "none" }}
                />
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    size={matches && "small"}
                    classes={{ root: classes.IconButtonroot }}
                  >
                    <PhotoOutlined />
                  </IconButton>
                </label>

                <IconButton
                  size={matches && "small"}
                  classes={{ root: classes.IconButtonroot }}
                >
                  <ArchiveOutlined fontSize="small" />
                </IconButton>
                <IconButton
                  size={matches && "small"}
                  classes={{ root: classes.IconButtonroot }}
                >
                  <MoreVert fontSize="small" />
                </IconButton>
                <IconButton
                  size={matches && "small"}
                  classes={{ root: classes.IconButtonroot }}
                >
                  <Undo fontSize="small" />
                </IconButton>
                <IconButton
                  size={matches && "small"}
                  classes={{ root: classes.IconButtonroot }}
                >
                  <Redo fontSize="small" />
                </IconButton>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flex: 0.3,
                }}
              >
                <Button
                  className={classes.button}
                  onClick={addNote}
                  startIcon={<Add />}
                >
                  Add
                </Button>
                <Button
                  className={classes.button}
                  onClick={() => setShow(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default CustomInput;
