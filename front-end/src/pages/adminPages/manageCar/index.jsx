import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "./style";

import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
import Autocomplete from '@material-ui/lab/Autocomplete';
import AdminNavBar from "../../../components/admin/navBar";
import Divider from "@material-ui/core/Divider";

import carService from "../../../services/CarService"
import ViewAllCarPopUp from "../../../components/admin/viewAllCarPopUp";








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
            } ,

            CarDetailsSetText :{
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
            },

            params : 'indika'
        }
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

                            <h7 style={{color : 'white'}}>MANAGE CARS</h7>

                        </div>

                        <Divider />
                        <div className={classes.formDividerText2Container}>
                            <h7 style={{color : 'black'}}>Car Details</h7>

                        </div>
                        <Divider />

                        <div className={classes.formTextFieldContainer}>

                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Vehical ID"
                                variant="standard"
                                onChange={(e) =>{
                                    this.state.carDetails.vehicleId=e.target.value;
                                }}
                                value={this.state.CarDetailsSetText.vehicleId}

                            />

                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Type"
                                variant="standard"
                                onChange={(e) =>{
                                    this.state.carDetails.vehicleType=e.target.value;
                                }}
                                value={this.state.CarDetailsSetText.vehicleType}
                            />

                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Num of Passengers"
                                variant="standard"
                                onChange={(e) =>{
                                    this.state.carDetails.numofP=e.target.value;
                                }}
                                value={this.state.CarDetailsSetText.numofP}
                            />

                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Auto or Mannual"
                                variant="standard"
                                onChange={(e) =>{
                                    this.state.carDetails.numofP=e.target.value;
                                }}
                                value={this.state.CarDetailsSetText.transmissionType}
                            />

                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Petrol or Diesel"
                                variant="standard"
                                onChange={(e) =>{
                                    this.state.carDetails.numofP=e.target.value;
                                }}
                                value={this.state.CarDetailsSetText.transmissionType}
                            />



                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Registration Number"
                                style={{ width: 160 }}
                                variant="standard"
                                onChange={(e) =>{
                                    this.state.carDetails.registerNum=e.target.value;
                                }}
                                value={this.state.CarDetailsSetText.registerNum}

                            />

                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Color"
                                variant="standard"
                                style={{ width: 160 }}
                                onChange={(e) =>{
                                    this.state.carDetails.color=e.target.value;
                                }}
                                value={this.state.CarDetailsSetText.color}
                            />

                        </div>
                        <Divider />
                        <div className={classes.formDividerTextContainer}>
                            <h7 style={{color : 'black'}}>Prices for the rent durations.</h7>
                            <h7 style={{color : 'black'}}>Free mileage for the price and duration.</h7>
                            <h7 style={{color : 'black'}}>Price for extra KM.</h7>
                        </div>
                        <Divider />
                        <div className={classes.formTextField2Container}>

                            <TextField
                                style={{width :'17%'}}
                                size={"small"}
                                id="outlined-required"
                                label="daily"
                                variant="standard"
                                onChange={(e) =>{
                                    this.state.carDetails.pricesForDaily=e.target.value;
                                }}
                                value={this.state.CarDetailsSetText.pricesForDaily}
                            />
                            <TextField
                                style={{width :'17%'}}
                                size={"small"}
                                id="outlined-required"
                                label="monthly"
                                variant="standard"
                                onChange={(e) =>{
                                    this.state.carDetails.pricesForMonthly=e.target.value;
                                }}
                                value={this.state.CarDetailsSetText.pricesForMonthly}
                            />

                            <TextField

                                size={"small"}
                                id="outlined-required"
                                label="Km"
                                variant="standard"
                                onChange={(e) =>{
                                    this.state.carDetails.freeMileage=e.target.value;
                                }}
                                value={this.state.CarDetailsSetText.freeMileage}
                            />

                            <TextField

                                size={"small"}
                                id="outlined-required"
                                label="Rs/="
                                variant="standard"
                                onChange={(e) =>{
                                    this.state.carDetails.priceForExtraKm=e.target.value;
                                }}
                                value={this.state.CarDetailsSetText.priceForExtraKm}
                            />
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
                            > </div>
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
                                accept="image/*"
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
                                accept="image/*"
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
                                accept="image/*"
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
                                    onClick={() =>{this.addCar()}}
                                >
                                    Save
                                </Button>

                                <Button variant="outlined" style={{color : 'blue', width : '30%'}}>
                                    Update
                                </Button>

                                <Button variant="outlined" style={{color : 'red' , width : '30%'}}>
                                    Delete
                                </Button>


                            </div>


                            <div className={classes.clearButtonContainer}>

                                <ViewAllCarPopUp bool={true}/>

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