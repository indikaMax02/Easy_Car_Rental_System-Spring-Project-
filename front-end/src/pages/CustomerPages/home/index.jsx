import React, {Component, Fragment} from "react";
import Typography from "@material-ui/core/Typography";
import {styleSheet} from "./style";
import {withStyles} from "@material-ui/core";

class Home extends Component{
    constructor(props) {
        super(props);
    }



    render() {
        const {classes}=this.props;
        return(
            <Fragment>

                <div className={classes.mainContainer}>



                <div className={classes.container}>

                    <Typography variant="h4">
                        Customer Manage
                    </Typography>

                    <div className={classes.form_container}>

                          <h1 >indika</h1>
                          <h1 className={classes.h1}>indika</h1>
                          <h1 >indika</h1>



                    </div>

                </div>




                </div>




            </Fragment>


        )
    }
}
export default withStyles(styleSheet) (Home)