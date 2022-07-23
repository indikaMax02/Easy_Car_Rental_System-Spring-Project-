import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "./style";

import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
import Autocomplete from '@material-ui/lab/Autocomplete';
import AdminNavBar from "../../../components/admin/navBar";
import Divider from "@material-ui/core/Divider";

import postService from "../../../services/CarService"




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


    addCarImage=async () =>{

        var bodyFormData = new FormData();
        bodyFormData.append('param', this.state.frontImage);
        bodyFormData.append('param', this.state.backImage);
        bodyFormData.append('param', this.state.sideImage);
        bodyFormData.append('param', this.state.interiorImage);

         let res = await postService.addCarImage(bodyFormData);
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

        let res = await postService.addCar(carDetails);
        if (res.data.code==200){
            alert(res.data.message);

            this.addCarImage();

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
                                onChange={(e) =>{
                                    this.state.carDetails.vehicleId=e.target.value;
                                }}

                            />

                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Type"
                                variant="outlined"
                                onChange={(e) =>{
                                    this.state.carDetails.vehicleType=e.target.value;
                                }}
                            />

                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Num of Passengers"
                                variant="outlined"
                                onChange={(e) =>{
                                    this.state.carDetails.numofP=e.target.value;
                                }}
                            />

                            <Autocomplete
                                id="combo-box-demo"
                                size={"small"}

                                options={[
                                    { title: 'Auto'},
                                    { title: "Manual"}]}
                                getOptionLabel={(option) => option.title
                                }
                                style={{ width: 180 }}
                                renderInput={(params) => <TextField {...params} label="Transmission type." variant="outlined" />}
                                onChange={(event, value) =>
                                    this.state.carDetails.transmissionType =  value.title}

                            />
                            <Autocomplete
                                id="combo-box-demo"
                                size={"small"}

                                options={[
                                    { title: 'petrol'},
                                    { title: 'diesel'}]}
                                getOptionLabel={(option) => option.title}
                                style={{ width: 136 }}
                                renderInput={(params) => <TextField {...params} label="Fuel type." variant="outlined" />}
                                onChange={(event, value) =>
                                    this.state.carDetails.fuelType =  value.title}
                            />

                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Registration Number"
                                defaultValue="Hello World"
                                style={{ width: 200 }}
                                variant="outlined"
                                onChange={(e) =>{
                                    this.state.carDetails.registerNum=e.target.value;
                                }}

                            />

                            <TextField
                                size={"small"}
                                id="outlined-required"
                                label="Color"
                                defaultValue="Hello World"
                                variant="outlined"
                                style={{ width: 200 }}
                                onChange={(e) =>{
                                    this.state.carDetails.color=e.target.value;
                                }}
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
                                label="daily"
                                variant="outlined"
                                onChange={(e) =>{
                                    this.state.carDetails.pricesForDaily=e.target.value;
                                }}
                            />
                            <TextField
                                style={{width :'17%'}}
                                size={"small"}
                                id="outlined-required"
                                label="monthly"
                                variant="outlined"
                                onChange={(e) =>{
                                    this.state.carDetails.pricesForMonthly=e.target.value;
                                }}
                            />

                            <TextField

                                size={"small"}
                                id="outlined-required"
                                label="Rs/="
                                variant="outlined"
                                onChange={(e) =>{
                                    this.state.carDetails.freeMileage=e.target.value;
                                }}
                            />

                            <TextField

                                size={"small"}
                                id="outlined-required"
                                label="Km"
                                variant="outlined"
                                onChange={(e) =>{
                                    this.state.carDetails.priceForExtraKm=e.target.value;
                                }}
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

                        <div className={classes.search_container}>

                            <Button variant="contained" color="success"
                                    onClick={() => {
                                        this.addCar()
                                    }}
                            >
                                Upload Images


                            </Button>


                        </div>

                    </div>


                </div>



            </div>


        )




    }
}

export default withStyles(styleSheet) (ManageCar)