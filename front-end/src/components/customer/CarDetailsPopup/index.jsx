import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Link from "@material-ui/core/Link";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

 function CarDetailsPopUp(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {classes}=props;
    return (
        <>
            <button className=" w-50 car__item-btn car__btn-details"
            onClick={handleShow} style={{color:'white'}}>
              Car Details
            </button>

            <Modal style={{ color : 'blue' , background: 'rgba(255, 255, 255, 0)' , boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(8.8px)'}} size={"lg"} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Car Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className={classes.mainContainer}>
                        <div className={classes.leftContainer}></div>
                        <div className={classes.rightContainer}>

                            <Grid container className={classes.imagesGridContainer}   >

                                <Grid item> <div className={classes.images} spacing={10}>hello</div></Grid>
                                <Grid item> <div className={classes.images} spacing={5}>hello</div> </Grid>
                                <Grid item> <div className={classes.images} spacing={5}>hello</div> </Grid>
                                <Grid item> <div className={classes.images} spacing={5}>hello</div> </Grid>

                            </Grid>

                        </div>
                    </div>



                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default withStyles(styleSheet)(CarDetailsPopUp)
