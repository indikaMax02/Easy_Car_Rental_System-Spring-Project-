import React, {Component} from "react";
import {styleSheet} from "./style";
import {colors, withStyles} from "@material-ui/core";
import {AiFillFacebook, AiOutlineInstagram} from "react-icons/ai";
import {FaTwitterSquare, FaLinkedin} from "react-icons/fa";
import companyLogo from "../../../assets/icon/logo.png"

import {TbPower} from "react-icons/tb";
import Button from "@material-ui/core/Button";
import {HiSearch} from "react-icons/hi";
import {RiAddCircleFill} from "react-icons/ri";
import Grid from "@material-ui/core/Grid";
import {Dropdown} from "semantic-ui-react";
import {HiArrowSmRight} from "react-icons/hi";


class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const options = [
            { key: 1, text: 'Choice 1', value: 1 },
            { key: 2, text: 'Choice 2', value: 2 },
            { key: 3, text: 'Choice 3', value: 3 },
        ]
        const {classes} = this.props;


        return (

            <div className={classes.container}>


                <div className={classes.topHeaderWrapper}>

                    <div className={classes.contact_container}>

                        <p style={{color: 'white', marginLeft: '23%'}}>Call Us : 0814 251 152</p>

                    </div>

                    <div className={classes.after}></div>


                    <div className={classes.header_right}>

                        <ul className={classes.sm_icons_left}>
                            <li><AiFillFacebook style={{color: 'white', width: '41px', height: '32px'}}/></li>
                            <li><FaTwitterSquare style={{color: 'white', width: '41px', height: '30px'}}/></li>
                            <li><AiOutlineInstagram style={{color: 'white', width: '41px', height: '35px'}}/></li>
                            <li><FaLinkedin style={{color: 'white', width: '41px', height: '30px'}}/></li>


                        </ul>


                        <div className={classes.right_icons}>

                            <section className={classes.spacing_div}></section>

                            <Button className={classes.loginButton}

                                    startIcon={<TbPower/>}

                                    onPointerEnter={(e) => {
                                        e.target.style.color = 'white'
                                        console.log("ok")
                                    }}

                                    onPointerLeave={(e) => {
                                        e.target.style.color = "#898"
                                        console.log("cacel")
                                    }}
                            >Login</Button>

                            <Button className={classes.registerButton}

                                    startIcon={<RiAddCircleFill/>}

                                /*onMouseEnter={(e) =>{
                                    e.target.style.color='white'
                                    console.log("ok")
                                }}
*/
                                /*onMouseLeave={(e) =>{
                                    e.target.style.color="#898"
                                    console.log("cacel")
                                }}*/
                            >Register</Button>


                            <HiSearch className={classes.HiSearch}/>


                        </div>

                    </div>


                </div>


                {/*nav bar start*/}
                <div className={classes.navBar_container}>

                    <div className={classes.navBar_component}>
                        <div><a href=""><img src={companyLogo} alt=""/></a></div>
                        <ul className={classes.navbar_options}>
                            <li>
                                <div style={{textDecoration: 'none'}} className={classes.dropdown_wrapper_menu_button}>

                                    <a style={{textDecoration: 'none'}} className={classes.menu_button}
                                       href="#">Home</a>

                                    {/*<div className={classes.drop_menu}>

                                          <a className="menu-button" href="index.html">Home-I</a>
                                          <a className="menu-button" href="index_II.html">Home-II</a>
                                      </div>*/}
                                </div>
                            </li>

                            <li>

                                <div>
                                    <a style={{textDecoration: 'none'}} href="">CAR</a>
                                </div>

                            </li>

                            <li>

                                <div><a style={{textDecoration: 'none'}} href="">ABOUT</a></div>

                            </li>

                            <li>
                                <div><a style={{textDecoration: 'none'}} href="">SERVICES</a></div>

                            </li>

                            <li>
                                <div><a style={{textDecoration: 'none'}} href="">BLOG</a></div>
                            </li>

                            <li>

                                <div><a style={{textDecoration: 'none'}} href="">CONTACT</a></div>
                            </li>


                        </ul>

                        {/* <div style={{backgroundColor : "blue", width : '60%'}}>Home</div>*/}

                    </div>




                </div>
                {/*nav bar end*/}


                {/*slider area start*/}
                 <div className={classes.slider_container}>

                     <div className={classes.slider_div}>

                         <div className={classes.slider_text_container}>

                             <section style={{marginLeft : '10px'}}>

                                 <h2 style={{fontSize : '40px' , color : 'white'}}>CHEAP CAR RENTAL IN<br/>
                                     YOUR DESIRED DESTINATION</h2>

                                 <p style={{fontSize : '20px', color : 'white'}}>One of our top priorities is to adjust each package we offer to our<br/>
                                     customer’s exact needs. Rental Cars / Bike / Jeeps Starting @ $3 / Hrs</p>

                             </section>



                             <div className={classes.slider_text_Button_container}>

                                 <Button variant="contained" color="primary" endIcon={<HiArrowSmRight/>}>
                                     ABOUT US
                                 </Button>

                                 <Button variant="contained" color="primary" endIcon={<HiArrowSmRight/>}>
                                     CONTACT
                                 </Button>

                             </div>
                           </div>


                            <div className={classes.slider_formMain_container}>






                                <div className={classes.form_backGroudContainer}>









                                    <div className={classes.form_backGroud}>



                                        <div className={classes.title_container_SliderForm_container}>

                                            <section className={classes.title_container_SliderForm}>

                                                <h3 style={{fontSize : '18px' , fontWeight: '600' , color : 'white'}}>LET’S FIND YOUR PERFECT CAR</h3>

                                            </section>
                                            <div className={classes.after_slider}></div>
                                            <section className={classes.before_style}></section>

                                        </div>


                                    </div>

                                </div>




                            </div>

                         </div>



                     </div>


                 </div>


        )
    }


}

export default withStyles(styleSheet)(NavBar)