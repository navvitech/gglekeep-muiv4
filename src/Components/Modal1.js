import {
  Button,
  Grid,
  // Grow,
  IconButton,
  makeStyles,
  Modal,
} from '@material-ui/core';
import { keeps } from '../data';
import {
  AddAlertOutlined,
  ArchiveOutlined,
  GroupAddOutlined,
  PhotoOutlined,
  PaletteOutlined,
  MoreVert,
  Undo,
  Redo,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  modalBody: {
    position: 'absolute',
    top: '50%',
    borderRadius: '20px',
    // boxShadow: "0 1px 6px 0 rgb(32 33 36 / 28%)",
    outline: 'none',
    // height: "75vh",
    width: '95%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'white',
  },
  cardActionsRoot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '10px',
    //   border: "2px solid orangered",
  },
  IconButtonroot: {
    '&:hover': {
      background: 'rgba(0,0,0,0.2)',
    },
  },
  button: {
    textTransform: 'capitalize',
  },
}));

const CustomModal = ({ setModal, modal, IDd }) => {
  const classes = useStyles();
  const show = keeps.filter((item) => item.id === IDd);

  return (
    <Modal
      // BackdropProps={{ style: { top: "74px" } }}
      open={modal}
      onClose={() => setModal(false)}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
    >
      <Grid container>
        <Grid item lg={5} md={5} sm={8} xs={12} className={classes.modalBody}>
          <img
            src={show[0]?.image}
            alt='ss'
            width='100%'
            style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
          />
          <div className={classes.toolbar}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                flex: 0.8,
              }}
            >
              <IconButton
                size='small'
                classes={{ root: classes.IconButtonroot }}
              >
                <AddAlertOutlined fontSize='small' />
              </IconButton>
              <IconButton
                size='small'
                classes={{ root: classes.IconButtonroot }}
              >
                <GroupAddOutlined fontSize='small' />
              </IconButton>
              <IconButton
                size='small'
                classes={{ root: classes.IconButtonroot }}
              >
                <PaletteOutlined fontSize='small' />
              </IconButton>
              <IconButton
                size='small'
                classes={{ root: classes.IconButtonroot }}
              >
                <PhotoOutlined fontSize='small' />
              </IconButton>
              <IconButton
                size='small'
                classes={{ root: classes.IconButtonroot }}
              >
                <ArchiveOutlined fontSize='small' />
              </IconButton>
              <IconButton
                size='small'
                classes={{ root: classes.IconButtonroot }}
              >
                <MoreVert fontSize='small' />
              </IconButton>
              <IconButton
                size='small'
                classes={{ root: classes.IconButtonroot }}
              >
                <Undo fontSize='small' />
              </IconButton>
              <IconButton
                size='small'
                classes={{ root: classes.IconButtonroot }}
              >
                <Redo fontSize='small' />
              </IconButton>
            </div>
            <div
              style={{
                display: 'flex',
                flex: 0.2,
                justifyContent: 'center',
              }}
            >
              <Button
                className={classes.button}
                // onClick={() => setShow(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default CustomModal;
