import React, {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@material-ui/core";
import {AiFillFacebook,AiOutlineInstagram} from "react-icons/ai";
import {FaTwitterSquare,FaLinkedin} from "react-icons/fa";
class NavBar extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        const {classes}=this.props;
        return(

            <div className={classes.container}>


                   <div className={classes.topHeaderWrapper}>

                       <div className={classes.contact_container}>

                           <p style={{color:'white', marginLeft:'23%'}}>Call Us : 0814 251 152</p>

                       </div>
                       <div className={classes.after}></div>


                       <div className={classes.header_right}>

                           <ul className={classes.sm_icon}>
                               <li><AiFillFacebook style={{color:'white' ,width : '41px' , height :'32px'}}/></li>
                               <li><FaTwitterSquare style={{color:'white' ,width : '41px' , height :'30px'}}/></li>
                               <li><AiOutlineInstagram style={{color:'white' ,width : '41px' , height :'35px'}}/></li>
                               <li><FaLinkedin style={{color:'white' ,width : '41px' , height :'30px'}}/></li>


                           </ul>

                       </div>




                   </div>

            </div>



        )
    }


}
export default withStyles(styleSheet) (NavBar)