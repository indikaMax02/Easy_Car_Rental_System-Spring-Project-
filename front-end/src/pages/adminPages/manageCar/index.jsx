import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "./style";
import Logo from "../../../assets/icon/logo.png"
import Button from "@material-ui/core/Button";
import {TbHome} from "react-icons/tb";
import {GrUserManager} from "react-icons/gr";
import {AiFillCar} from "react-icons/ai";
import {FaUserEdit} from "react-icons/fa";
import {VscRequestChanges} from "react-icons/vsc";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import MenuListComposition from "../../../components/admin/MenuListComposition";
import TextField from "@material-ui/core/TextField";
import Autocomplete from '@material-ui/lab/Autocomplete';
import AdminNavBar from "../../../components/admin/navBar";
import Divider from "@material-ui/core/Divider";
import Link from "../../../assets/image/slider1.jpg";
import myImage from "../../../assets/image/slider1.jpg";
import PostService from "../../../services/PostService";


class ManageCar extends Component{
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                userId: '1',
                id: '1',
                title: 'tgrtg',
                body: 'rtttttttttttttttttttttttttttttttttttttttgrtgrtgr'
            },
        }
    }



    async handleSubmit() {
        console.log('save button clicked!!')
        console.log(this.state.formData)
        let formData = this.state.formData
        let response = await PostService.createPost(formData);
        if (response.status === 201) {
            alert("post Created")
        } else {
            alert("post Create Failed")
        }
    }


    render() {


        this.state = {
            lnk : {Link}
        }

        const top100Films = [
            { title: 'Auto'},
            { title: "Manual"}];

        const {classes}=this.props;

        return(

            <div className={classes.mainContainer}>


               <AdminNavBar/>

                <div className={classes.state_Bar_container}></div>

                <div className={classes.form_Container}>

                    <div  className={classes.form_backGround}>
                        <div className={classes.form_textFieldForm}>

                            <h4 style={{color : 'white'}}>MANAGE CARS</h4>

                        </div>

                        <Divider />
                        <div className={classes.formDividerText2Container}>
                            <h5 style={{color : 'black'}}>Car Details</h5>

                        </div>
                        <Divider />

                        <div className={classes.formTextFieldContainer}>

                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Vehical ID"
                                variant="outlined"
                            />

                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Type"
                                variant="outlined"
                            />

                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Num of Passengers"
                                variant="outlined"
                            />

                            <Autocomplete
                                id="combo-box-demo"
                                size={"small"}

                                options={[
                                    { title: 'Auto'},
                                    { title: "Manual"}]}
                                getOptionLabel={(option) => option.title}
                                style={{ width: 180 }}
                                renderInput={(params) => <TextField {...params} label="Transmission type." variant="outlined" />}
                            />
                            <Autocomplete
                                id="combo-box-demo"
                                size={"small"}

                                options={[
                                    { title: 'Auto'},
                                    { title: "Manual"}]}
                                getOptionLabel={(option) => option.title}
                                style={{ width: 136 }}
                                renderInput={(params) => <TextField {...params} label="Fuel type." variant="outlined" />}
                            />

                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Registration Number"
                                defaultValue="Hello World"
                                style={{ width: 200 }}
                                variant="outlined"
                            />

                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Color"
                                defaultValue="Hello World"
                                variant="outlined"
                                style={{ width: 200 }}
                            />

                        </div>
                        <Divider />
                        <div className={classes.formDividerTextContainer}>
                            <h5 style={{color : 'black'}}>Prices for the rent durations.</h5>
                            <h5 style={{color : 'black'}}>Free mileage for the price and duration.</h5>
                            <h5 style={{color : 'black'}}>Price for extra KM.</h5>
                        </div>
                        <Divider />
                        <div className={classes.formTextField2Container}>

                            <TextField
                                style={{width :'17%'}}
                                size={"small"}
                                id="outlined-required"
                                label="Type"
                                variant="outlined"
                            />
                            <TextField
                                style={{width :'17%'}}
                                size={"small"}
                                id="outlined-required"
                                label="Type"
                                variant="outlined"
                            />

                            <TextField

                                size={"small"}
                                id="outlined-required"
                                label="Type"
                                variant="outlined"
                            />

                            <TextField

                                size={"small"}
                                id="outlined-required"
                                label="Type"
                                variant="outlined"
                            />
                        </div>
                        <Divider />
                        <div className={classes.formDividerText2Container}>
                            <h5 style={{color : 'black'}}>Front View</h5>
                            <h5 style={{color : 'black'}}>Back View</h5>
                            <h5 style={{color : 'black'}}>Side View</h5>
                            <h5 style={{color : 'black'}}>Interior</h5>
                        </div>
                        <Divider />


                        <div className={classes.imageContainer}>

                            <div className={classes.imageDiv}

                                 /*style={{

                                     display : 'flex',
                                     alignItems : 'center',
                                     justifyContent : 'center',
                                     height : '75%',
                                 /!*    background:"url(" + Link+ ")",*!/
                                     backgroundSize: 'cover'

                                 }}*/

                            /*onClick={(e) =>{
                                 var S=this.state.lnk;
                              //  e.target.style.

                             e.target.style.background="url(" + Link+ ")";
                                e.target.style.backgroundSize='cover';

                                console.log(S)
                            }}*/

                            > </div>
                            <div className={classes.imageDiv}>

                                <Button variant="contained" color="primary"

                                        onClick={() =>{
                                            this.handleSubmit();
                                        }
                                        }




                                >
                               Submit
                            </Button>


                            </div>
                            <div className={classes.imageDiv}></div>
                            <div className={classes.imageDiv}></div>

                        </div>




                    </div>


                    <div  className={classes.form_backGround_right}>

                        <div className={classes.title_container}>
                            <div className={classes.form_textFieldForm2}>

                                <h4 style={{color : 'white'}}>CAR STATE</h4>

                            </div>

                        </div>

                        <div className={classes.search_container}></div>

                    </div>


                </div>



            </div>


        )

    }


}
export default withStyles(styleSheet) (ManageCar)