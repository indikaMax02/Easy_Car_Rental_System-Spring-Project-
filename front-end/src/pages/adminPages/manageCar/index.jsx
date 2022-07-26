import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "./style";
import photo from '../../../assets/icon/logo.png'
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
import AdminNavBar from "../../../components/admin/navBar";
import Divider from "@material-ui/core/Divider";

import carService from "../../../services/CarService"

import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import ViewAllCarPopUp from "../../../components/admin/viewAllCarPopUpTable"
import ViewAllCarPopUpTable from "../../../components/admin/viewAllCarPopUpTable";
import Typography from "@material-ui/core/Typography";
import axios from "../../../axios";







class ManageCar extends Component{


    constructor(props) {
        super(props);



        this.state = {
            frontImage: null,
            backImage : null,
            sideImage : null,
            interiorImage : null,

            frontView : null,
            backView : null,
            sideView : null,
            interiorView : null,

            carDetails : {
                vehicleId : '',
                vehicleType : '',
                numofP : '',
                transmissionType : '',
                fuelType :'',
                registerNum : '',
                color : '',
                pricesForDaily : '',
                pricesForMonthly : '',
                freeMileage : '',
                priceForExtraKm : '',
            }

        }
    }

    changeStateCarDetails(vehicleId,vehicleType,numofP,transmissionType,fuelType,registerNum,color,pricesForDaily,pricesForMonthly,freeMileage,priceForExtraKm,frontImage,backImage,sideImage,interiorImage){
        this.setState({
            carDetails : {
                vehicleId : vehicleId,
                vehicleType : vehicleType,
                numofP : numofP,
                transmissionType : transmissionType,
                fuelType :fuelType,
                registerNum : registerNum,
                color : color,
                pricesForDaily : pricesForDaily,
                pricesForMonthly : pricesForMonthly,
                freeMileage : freeMileage,
                priceForExtraKm : priceForExtraKm,
            },
            frontView : frontImage,
            backView : backImage,
            sideView : sideImage,
            interiorView : interiorImage,
        })
    }






    addCarImage=async (carId) =>{

        var bodyFormData = new FormData();
        bodyFormData.append('param', this.state.frontImage);
        bodyFormData.append('param', this.state.backImage);
        bodyFormData.append('param', this.state.sideImage);
        bodyFormData.append('param', this.state.interiorImage);

         let res = await carService.addCarImage(bodyFormData,carId);
         if (res.data.code===200){alert(res.data.message)}else {
             alert(res.data.message);
         }

    }

    addCar =async () =>{


        console.log(this.state.carDetails.vehicleId);
        console.log(this.state.carDetails.vehicleType);
        console.log(this.state.carDetails.numofP);
        console.log(this.state.carDetails.transmissionType);
        console.log(this.state.carDetails.fuelType);

        var carDetails = {
            vehicleId : this.state.carDetails.vehicleId,
            brand  : this.state.carDetails.vehicleType,
            numOfPassenger : this.state.carDetails.numofP,
            transmissionType : this.state.carDetails.transmissionType,
            fuelType : this.state.carDetails.fuelType,
            priceOfRentDurationDaily : this.state.carDetails.pricesForDaily ,
            priceOfRentDurationMonthly : this.state.carDetails.pricesForMonthly,
            freeMileageForPriceAndDuration : this.state.carDetails.freeMileage,
            priceOfExtraKm : this.state.carDetails.priceForExtraKm,
            registerNumber : this.state.carDetails.registerNum,
            color : this.state.carDetails.color,
            state : 'Parking'
        }

        let res = await carService.addCar(carDetails);
        if (res.data.code==200){
            alert(res.data.message);

            this.addCarImage(carDetails.vehicleId);

        }else {
            alert(res.data.message);
        }

    }

    render(){

        const {classes}=this.props;

        return(


            <div className={classes.mainContainer}>
                 <AdminNavBar/>

                <div className={classes.state_Bar_container}></div>

                <div className={classes.form_Container}>

                    <div    className={classes.form_backGround}>
                        <div className={classes.form_textFieldForm}>

                            <h7 style={{color : 'white'}}>MANAGE CARS</h7>

                        </div>

                        <Divider />
                        <div className={classes.formDividerText2Container}>
                            <h7 style={{color : 'black'}}>Car Details</h7>

                        </div>
                        <Divider />

                        <div className={classes.formTextFieldContainer}>

                            <ValidatorForm ref="form" className={classes.validaterForm} >

                                <TextValidator
                                id="outlinedbasic"
                                placeHolder="CarID"
                                variant='outlined'
                                label="CarId"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.carDetails.vehicleId}
                                onChange={(e) => {
                                    let data = this.state.carDetails
                                    data.vehicleId = e.target.value
                                    this.setState({ data })
                                }}
                                validators={['variant']}
                                />

                                <TextValidator
                                    size={"small"}
                                    id="outlined-required"
                                    label="Brand"
                                    variant="outlined"
                                    value={this.state.carDetails.vehicleType}
                                    onChange={(e) => {
                                        let data = this.state.carDetails
                                        data.vehicleType = e.target.value
                                        this.setState({ data })
                                    }}

                                />

                                <TextValidator
                                    size={"small"}
                                    id="outlined-required"
                                    label="Num of Passengers"
                                    variant="outlined"
                                    value={this.state.carDetails.numofP}
                                    onChange={(e) => {
                                        let data = this.state.carDetails
                                        data.numofP = e.target.value
                                        this.setState({ data })
                                    }}

                                />

                                <TextValidator
                                    size={"small"}
                                    id="outlined-required"
                                    label="Auto or Mannual"
                                    variant="outlined"
                                    value={this.state.carDetails.transmissionType}
                                    style={{ width: 180 }}
                                    onChange={(e) => {
                                        let data = this.state.carDetails
                                        data.transmissionType = e.target.value
                                        this.setState({ data })
                                    }}

                                />

                                <TextValidator
                                    size={"small"}
                                    id="outlined-required"
                                    label="Petrol or Diesel"
                                    variant="outlined"
                                    value={this.state.carDetails.fuelType}
                                    style={{ width: 180 }}
                                    onChange={(e) => {
                                        let data = this.state.carDetails
                                        data.fuelType = e.target.value
                                        this.setState({ data })
                                    }}

                                />

                                <TextValidator
                                    size={"small"}
                                    id="outlined-required"
                                    label="Registration Number"
                                    style={{ width: 180 }}
                                    variant="outlined"
                                    value={this.state.carDetails.registerNum}
                                    onChange={(e) => {
                                        let data = this.state.carDetails
                                        data.registerNum = e.target.value
                                        this.setState({ data })
                                    }}


                                />
                                <TextValidator
                                    size={"small"}
                                    id="outlined-required"
                                    label="Color"
                                    variant="outlined"
                                    value={this.state.carDetails.color}
                                    style={{ width: 180 }}
                                    onChange={(e) => {
                                        let data = this.state.carDetails
                                        data.color = e.target.value
                                        this.setState({ data })
                                    }}

                                />
                            </ValidatorForm>
                        </div>
                        <Divider />
                        <div className={classes.formDividerTextContainer}>
                            <h7 style={{color : 'black'}}>Prices for the rent durations.</h7>
                            <h7 style={{color : 'black'}}>Free mileage for the price and duration.</h7>
                            <h7 style={{color : 'black'}}>Price for extra KM.</h7>
                        </div>
                        <Divider />
                        <div className={classes.formTextField2Container}>

                            <ValidatorForm ref="form" className={classes.validaterForm} >

                                <TextValidator
                                    style={{width :'17%'}}
                                    size={"small"}
                                    id="outlined-required"

                                    label="daily"
                                    variant="outlined"
                                    value={this.state.carDetails.pricesForDaily}
                                    style={{ width: 180 }}
                                    onChange={(e) => {
                                        let data = this.state.carDetails
                                        data.pricesForDaily = e.target.value
                                        this.setState({ data })
                                    }}

                                />

                                <TextValidator
                                    size={"small"}
                                    id="outlined-required"
                                    label="monthly"
                                    variant="outlined"
                                    value={this.state.carDetails.pricesForMonthly}
                                    style={{ width: 180 }}
                                    onChange={(e) => {
                                        let data = this.state.carDetails
                                        data.pricesForMonthly = e.target.value
                                        this.setState({ data })
                                    }}/>

                                <TextValidator
                                    size={"small"}
                                    label="Km"
                                    variant="outlined"
                                     value={this.state.carDetails.freeMileage}
                                    style={{ width: 180 }}
                                    onChange={(e) => {
                                        let data = this.state.carDetails
                                        data.freeMileage = e.target.value
                                        this.setState({ data })
                                    }}

                                />

                                <TextValidator

                                    size={"small"}
                                    id="outlined-required"
                                    label="Rs/="
                                    variant="outlined"
                                    value={this.state.carDetails.priceForExtraKm}
                                    style={{ width: 180 }}
                                    onChange={(e) => {
                                        let data = this.state.carDetails
                                        data.priceForExtraKm = e.target.value
                                        this.setState({ data })
                                    }}

                                />

                            </ValidatorForm>









                        </div>
                        <Divider />
                        <div className={classes.formDividerText2Container}>
                            <h7 style={{color : 'black'}}>Front View</h7>
                            <h7 style={{color : 'black'}}>Back View</h7>
                            <h7 style={{color : 'black'}}>Side View</h7>
                            <h7 style={{color : 'black'}}>Interior</h7>
                        </div>
                        <Divider />


                        <div className={classes.imageContainer}>

                            <div className={classes.imageDiv}
                                 style={{
                                     display : 'flex',
                                     alignItems : 'center',
                                     justifyContent : 'center',
                                     height : '85%',
                                     backgroundImage:"url(" +this.state.frontView+ ")",
                                     backgroundSize: 'cover'
                                 }}
                            >

                            </div>
                            <div className={classes.imageDiv}
                                 style={{
                                     display : 'flex',
                                     alignItems : 'center',
                                     justifyContent : 'center',
                                     height : '85%',
                                     backgroundImage: "url(" +this.state.backView+ ")",
                                     backgroundSize: 'cover'
                                 }}
                            >


                            </div>



                            <div className={classes.imageDiv}
                                 style={{
                                     display : 'flex',
                                     alignItems : 'center',
                                     justifyContent : 'center',
                                     height : '85%',
                                     backgroundImage:"url(" +this.state.sideView+ ")",
                                     backgroundSize: 'cover'
                                 }}
                            >

                            </div>

                            <div className={classes.imageDiv}
                                 style={{
                                     display : 'flex',
                                     alignItems : 'center',
                                     justifyContent : 'center',
                                     height : '85%',
                                    backgroundImage:"url(" +this.state.interiorView+ ")",
                                     backgroundSize: 'cover'
                                 }}
                            >

                            </div>


                        </div>


                        <div className={classes.uploadButtonContainer}>

                            <div>   <input

                                style={{ display: 'none'}}
                                accept="image/*"
                                id="contained-button-file01"
                                multiple
                                type="file"
                                onChange={(e) =>{
                                    this.setState({
                                        frontImage: e.target.files[0],
                                        frontView : URL.createObjectURL(e.target.files[0])
                                    })


                                }}


                            />
                                <label htmlFor="contained-button-file01">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload
                                    </Button>
                                </label>

                            </div>

                            <div>   <input

                                style={{ display: 'none'}}
                                accept="image{/*"
                                id="contained-button-file02"
                                multiple
                                type="file"
                                onChange={(e) =>{
                                    this.setState({
                                        backImage: e.target.files[0],
                                        backView : URL.createObjectURL(e.target.files[0])

                                    })
                                }}
                            />
                                <label htmlFor="contained-button-file02">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload
                                    </Button>
                                </label>

                            </div>

                            <div>   <input

                                style={{ display: 'none'}}
                                accept="image/!*"
                                id="contained-button-file03"
                                multiple
                                type="file"
                                onChange={(e) =>{
                                    this.setState({
                                        sideImage: e.target.files[0],
                                        sideView : URL.createObjectURL(e.target.files[0])
                                    })
                                }}
                            />
                                <label htmlFor="contained-button-file03">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload
                                    </Button>
                                </label>

                            </div>

                            <div>   <input

                                style={{ display: 'none'}}
                                accept="image/!*"
                                id="contained-button-file04"
                                multiple
                                type="file"
                                onChange={(e) =>{
                                    this.setState({
                                        interiorImage: e.target.files[0],
                                        interiorView : URL.createObjectURL(e.target.files[0])
                                    })
                                }}
                            />
                                <label htmlFor="contained-button-file04">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload
                                    </Button>
                                </label>
                            </div>
                        </div>
                    </div>


                    <div  className={classes.form_backGround_right}>

                        <div className={classes.title_container}>


                            <div className={classes.form_textFieldForm2}>

                                <h4 style={{color : 'white'}}>CAR STATE</h4>

                            </div>

                        </div>

                        <div className={classes.sideButton_container}>

                                 <div className={classes.search_container}>
                                     <TextField
                                         label="Search Here"
                                         id="outlined-size-small"
                                         variant="outlined"
                                         size="small"

                                         style={{borderRadius : '20px',width: '70%'}}
                                     />
                                     <Button variant="outlined" style={{color : 'green'}}>
                                         Search
                                     </Button>
                                 </div>
                            <Divider/>

                            <div className={classes.button_container}>

                                <Button variant="outlined" style={{color : 'green' , width : '30%'}}
                                    onClick={async () =>{
                                        this.addCar()
                                    }
                                    }
                                >
                                    Save
                                </Button>

                                <Button variant="outlined" style={{color : 'blue', width : '30%'}}

                                >
                                    Update
                                </Button>

                                <Button variant="outlined" style={{color : 'red' , width : '30%'}}
                                       onClick={() =>{


                                       }}
                                >
                                    Delete
                                </Button>


                            </div>


                            <div className={classes.clearButtonContainer}>
                                <ViewAllCarPopUpTable data={{changeStateCarDetails:this.changeStateCarDetails.bind(this)}}/>
                                <Button variant="outlined" style={{color : 'back' , width : '95%'}}>
                                    Clear All
                                </Button>
                            </div>




                        </div>

                    </div>


                </div>



            </div>


        )




    }
}

export default withStyles(styleSheet) (ManageCar)