import React, {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@material-ui/core";
import {AiFillFacebook, AiOutlineInstagram} from "react-icons/ai";
import {FaLinkedin, FaTwitterSquare} from "react-icons/fa";
import companyLogo from "../../../assets/icon/logo.png"
import "./style.css";
import { ListGroup} from "reactstrap";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import {TbPower} from "react-icons/tb";
import Button from "@material-ui/core/Button";
import {HiArrowSmRight, HiSearch} from "react-icons/hi";
import {RiAddCircleFill} from "react-icons/ri";
import Container from "@material-ui/core/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "@material-ui/core/Link";
import {FormGroup, Form} from "reactstrap";
import aboutImg from  "../../../assets/image/slider1.jpg";


import Slider from "react-slick";
import CarService from "../../../services/CarService";
import FuntionCar from "../../../assets/CarData/carData";
import CarDetails from "../../../assets/CarData/carData";
import CarItem from "../../../components/customer/carItem/CarItem";
import Reg from "../../../components/customer/register";


const quickLinks = [
    {
        path: "/about",
        display: "About",
    },

    {
        path: "#",
        display: "Privacy Policy",
    },

    {
        path: "/cars",
        display: "Car Listing",
    },
    {
        path: "/blogs",
        display: "Blog",
    },

    {
        path: "/contact",
        display: "Contact",
    },
];

const carData=["indika","madu"];

const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
};

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const date = new Date();
        const year = date.getFullYear();
        const options = [
            {key: 1, text: 'Choice 1', value: 1},
            {key: 2, text: 'Choice 2', value: 2},
            {key: 3, text: 'Choice 3', value: 3},
        ]
        const {classes} = this.props;


        return (
            <body>
            <div className={classes.container}>
                <div className="main__navbar">
                    <Container>
                        <div className="navigation__wrapper d-flex align-items-center justify-content-between">

                            <div className="menu">
                                <a to="/home" role="button" className="nav-links" tabIndex="0" href="#">Home </a>
                                <a to="/customer" role="button" className="nav-links" tabIndex="0" href="#">Customer</a>
                                <a to="/cars" role="button" className="nav-links" tabIndex="0" href="#">Cars</a>
                                <a to="/service" role="button" className="nav-links" tabIndex="0" href="#">Service</a>
                                <a to="/contact" role="button" className="nav-links" tabIndex="0" href="#">Contact</a>
                            </div>


                            <div className="header__top">
                                <Container>
                                    <Row>
                                        <Col lg="6" md="6" sm="6">
                                            <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                                                <Link to="#" className=" d-flex align-items-center gap-1">
                                                    <i className="ri-login-circle-line"></i> Login
                                                </Link>
                                                <Link to="#" className=" d-flex align-items-center gap-1">
                                                    <i className="ri-user-line"></i> Register
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>

                        </div>
                    </Container>
                </div>







                <div>
                    <Slider {...settings} className="hero__slider">
                        <div className="slider__item slider__item-01 mt0">
                            <Container>
                                <div className="slider__content ">
                                    <h3 className="text-light mb-3">CHEAP CAR RENTAL IN</h3>
                                    <h1 className="text-light mb-4">One of our top priorities is to adjust
                                        each package we offer to our</h1>
                                    <h1 className="text-light mb-4">customer’s exact needs. Rental Cars / Bike / Jeeps Starting @ $3 / Hrs </h1>

                                    <Button variant="contained" color="primary" endIcon={<HiArrowSmRight/>}>
                                        ABOUT US
                                    </Button>

                                    <Button variant="contained" color="primary" endIcon={<HiArrowSmRight/>}>
                                        CONTACT
                                    </Button>
                                </div>
                            </Container>
                        </div>
                    </Slider>
                </div>










                {/*    <div className={classes.topHeaderWrapper}>
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
                                    }}*/}
                {/*      >Login</Button>
                            <Button className={classes.registerButton}

                                    startIcon={<RiAddCircleFill/>}*/}

                {/*                    >Register</Button>
                            <HiSearch className={classes.HiSearch}/>
                        </div>
                    </div>
                </div>
                */}


                {/*nav bar start*/}


              {/*  <div className={classes.navBar_container}>
                    <div className={classes.navBar_component}>
                        <div><a href=""><img src={companyLogo} alt=""/></a></div>
                        <ul className={classes.navbar_options}>
                            <li>
                                <div style={{textDecoration: 'none'}} className={classes.dropdown_wrapper_menu_button}>
                                    <a style={{textDecoration: 'none'}} className={classes.menu_button}
                                       href="#">Home</a>

                                    <div className={classes.drop_menu}>

                                          <a className="menu-button" href="index.html">Home-I</a>
                                          <a className="menu-button" href="index_II.html">Home-II</a>
                                      </div>
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

                         <div style={{backgroundColor : "blue", width : '60%'}}>Home</div>

                    </div>


                </div>*/}
                {/*nav bar end*/}


                {/*slider area start*/}


                {/*
                <div className={classes.slider_container}>

                    <div className={classes.slider_div}>

                        <div className={classes.slider_text_container}>

                            <section style={{marginLeft: '10px'}}>

                                <h2 style={{fontSize: '40px', color: 'white'}}>CHEAP CAR RENTAL IN<br/>
                                    YOUR DESIRED DESTINATION</h2>

                                <p style={{fontSize: '20px', color: 'white'}}>One of our top priorities is to adjust
                                    each package we offer to our<br/>
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

                                            <h3 style={{fontSize: '18px', fontWeight: '600', color: 'white'}}>LET’S FIND
                                                YOUR PERFECT CAR</h3>

                                        </section>
                                        <div className={classes.after_slider}></div>
                                        <section className={classes.before_style}></section>

                                    </div>


                                </div>

                            </div>


                        </div>

                    </div>


                </div>
*/}





















            <div className="hero__form">
                <Container>
                    <Row className="form__row">
                        <Col lg="4" md="4">
                            <div className="find__cars-left">
                                <h2>Find your best car here</h2>
                            </div>
                        </Col>
                        <Col lg="8" md="8" sm="12">

                            <div className="main_div">
                                <Form className="form">
                                    <div className=" d-flex align-items-center justify-content-between flex-wrap">
                                        <FormGroup className="form__group">
                                            <input type="text" placeholder="From address" required/>
                                        </FormGroup>

                                        <FormGroup className="form__group">
                                            <input type="text" placeholder="To address" required/>
                                        </FormGroup>

                                        <FormGroup className="form__group">
                                            <input type="date" placeholder="Journey date" required/>
                                        </FormGroup>

                                        <FormGroup className="form__group">
                                            <input
                                                className="journey__time"
                                                type="time"
                                                placeholder="Journey time"
                                                required
                                            />
                                        </FormGroup>
                                        <FormGroup className="select__group">
                                            <select>
                                                <option value="ac">AC Car</option>
                                                <option value="non-ac">Non AC Car</option>
                                            </select>
                                        </FormGroup>

                                        <FormGroup className="form__group">
                                            <button className="btn find__car-btn">Find Car</button>
                                        </FormGroup>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>















            <Container>
                <Row>
                    <Col lg="12" className="text-center mb-5">
                        <h6 className="section__subtitle">Come with</h6>
                        <h2 className="section__title">Hot Offers</h2>
                    </Col>
                    <CarDetails/>

                </Row>
            </Container>






















            <section
                className="about__section"
                style={
                    this.aboutClass === "aboutPage"
                        ? {marginTop: "0px"}
                        : {marginTop: "280px"}
                }>
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="about__section-content">
                                <h4 className="section__subtitle">About Us</h4>
                                <h2 className="section__title">Welcome to car rental service</h2>
                                <p className="section__description">
                                    A big thank you to Eazy Car Rental service for the beyond satisfactory help with
                                    my trip planning and airport drop and pick up! The moment I landed in BIA I was
                                    greeted with
                                    smiles – Sri Lanka the nation that forever smiles. I visited Sri Lanka with my
                                    fiancé and we
                                    were transported to the lively beach town of Unuwatuna, a slow but comfortable
                                    drive. The
                                    Unuwatuna bay beach was breathtaking at sunset and makes you feel like you’re in
                                    Hawaii but it’s
                                    a dozen times cheaper! Plenty of cafés, curios, hotels, lodgings and restaurants
                                    galore the
                                    streets suitable for everyone and anyone. We decided to settle at the Lavendish
                                    Beach Resort, on
                                    our first day we enjoyed a small but happening party by a cafe on the beach! Sri
                                    Lanka loves to
                                    party!! We loved every part of our trip and it’s all thanks to Casons for organising
                                    everything
                                    and total ease of mind! . <b>Welcome to Ontime Cabs & Tours, the number one cab
                                    service & rent a car company
                                    in western province which offers a range of services including 24x7 taxi service in
                                    any part of the country,
                                    rent a car service, airport transfers, wedding car service and cab service at an
                                    affordable
                                    price with a wide variety of vehicle fleet</b>
                                </p>
                            </div>
                        </Col>
                        <Col lg="6" md="6">
                            <div className="about__images">
                                <img src={aboutImg} alt="" className="w-100"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
















            <footer className="footer">
                <Container>
                    <Row>
                        <Col lg="4" md="4" sm="12">
                            <div className="logo footer__logo">
                                <h1>
                                    <Link to="/home" className=" d-flex align-items-center gap-2">
                                        <i className="ri-car-line"></i>
                                        <span>
                                                <b>Rental Car</b> <br/>  Service
                                             </span>
                                    </Link>
                                </h1>
                            </div>
                            <p className="footer__logo-content">This project is designed
                                so as to be used by Car Rental Company specializing in renting
                                cars to customers. It is an online system through which customers
                                can view available cars, register, view profile and book car.
                                The advancement in Information Technology and internet
                                penetration has greatly enhanced various business processes
                                and communication between companies (services provider) and
                                their customers of which car rental industry is not left out.</p>

                        </Col>

                        <Col lg="2" md="4" sm="6">
                            <div className="mb-4">
                                <h5 className="footer__link-title">Quick Links</h5>
                                <ListGroup>{quickLinks.map((item, index) => (
                                    <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))}
                                </ListGroup>
                            </div>
                        </Col>

                        <Col lg="3" md="4" sm="6">
                            <div className="mb-4">
                                <h5 className="footer__link-title mb-4">Head Office</h5>
                                <p className="office__info">N0:- 350, Main Street, Colombo Road, Katharagama</p>
                                <p className="office__info">Phone:- +9477-8580393 , +9471-6092570</p>
                                <p className="office__info">Email:- dilanrental13@gmail.com</p>
                                <p className="office__info">Opening:- 9am - 7pm</p>
                                <p className="office__info">Branches :- Mathara / Galle / Tango</p>
                                <p className="office__info">Visit & Booking :- Totally fee</p>
                            </div>
                        </Col>

                        <Col lg="3" md="4" sm="12">
                            <div className="mb-4">
                                <h5 className="footer__link-title">Your Votes</h5>
                                <p className="section__descriptions">Subscribe our Page</p>
                                <div className="newsletter">
                                    <input type="email" placeholder="Email"/>
                                    <span>
                                          <i className="ri-send-plane-line"></i>
                                        </span>
                                </div>
                            </div>
                            <a href="#" className="login100-social-item bg1"><i className="ri-facebook-fill"></i></a>
                            <a href="#" className="login100-social-item bg1"><i className="ri-whatsapp-line"></i></a>
                            <a href="#" className="login100-social-item bg1"><i className="ri-instagram-fill"></i></a>
                            <a href="#" className="login100-social-item bg1"><i className="ri-twitter-fill"></i></a>
                        </Col>

                        <Col lg="12">
                            <div className="footer__bottom">
                                <p className="section__description d-flex align-items-center  color white justify-content-center gap-1 pt-4">
                                    <i className="ri-copyright-line"></i>Copyright {year}, Developed by Dilan Tharaka .
                                    All rights reserved. </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>



            </div>









            </body>

        );
    }


}

export default withStyles(styleSheet)(NavBar)