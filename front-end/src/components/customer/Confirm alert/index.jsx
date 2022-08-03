import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import okIcon from "../../../assets/icon/ok.png"
import Typography from "@material-ui/core/Typography";




 function ConfirmAlert(props) {
    const [open, setOpen] = React.useState(true);
    const {classes}=props

    const handleClickOpen = () => {
        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (

        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog

                open={open}
                onClose={handleClose}

                aria-labelledby="draggable-dialog-title"
            >

                <DialogContent>
                    <DialogContentText>
                         <div className={classes.mainContainer}>


                             <img className={classes.image} src={okIcon} alt=""/>
                             <div className={classes.textContainer}><Typography style={{fontColor : 'green'}}   variant="h3">Send Request Successfully</Typography></div>


                         </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default withStyles(styleSheet) (ConfirmAlert)