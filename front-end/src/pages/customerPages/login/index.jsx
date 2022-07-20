
import {styleSheet} from "./style";
import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";




class Login extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        const {classes}=this.props;
        return(
           <div className={classes.main_div}>

               <div className={classes.login_cover}>


                   <div className={classes.title_container}>
                       <Typography variant="h4" gutterBottom   >
                             Login Here
                       </Typography>
                   </div>

                   <div className={classes.form_container}></div>

                   <div className={classes.button_container}></div>
               </div>


           </div>


        )
    }
}

export default withStyles(styleSheet) (Login)