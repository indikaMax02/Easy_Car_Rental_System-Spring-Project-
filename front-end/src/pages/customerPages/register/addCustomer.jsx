import React, {Component, Fragment} from "react";
import {withStyles} from "@material-ui/core";
import {styleSheet} from "./temp";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import CustomerService from "../../../services/customerService";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import CarService from "../../../services/CarService";
import Autocomplete from "@material-ui/lab/Autocomplete";

class AddCustomer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            IDFrontImage: null,
            IDBackImage: null,

            IDFrontView: null,
            IDBackView: null,


            customerDerails: {
                id: '',
                email: '',
                nic: '',
                drivingLicence: '',
                address: '',
                contactNum: '',
                userName: '',
                password: '',
            },

            TextLabel: 'DRIVING LICENCE OR NIC NUMBER'

        }
    }

    registerCustomer = async () => {

        var customerDetails = {
            id: this.state.customerDerails.id,
            email: this.state.customerDerails.email,
            nic: this.state.customerDerails.nic,
            drivingLicence: this.state.customerDerails.drivingLicence,
            address: this.state.customerDerails.address,
            contactNumber: this.state.customerDerails.contactNum,
            username: this.state.customerDerails.userName,
            password: this.state.customerDerails.password,
        }


        let res = await CustomerService.registerCustomer(customerDetails);

        if (res.code != 'ERR_BAD_REQUEST') {
            alert(res.data.message);
        } else {
            alert(res.response.data.message);
        }
    }

    render() {

        const {classes} = this.props
        return (

            <Fragment>
                <div className={classes.all}>

                    <div className={classes.root}>
                        <AppBar position="static">
                            <Toolbar>
                                <display4 style={{
                                    backgroundColor: '#0000A5',
                                    fontSize: '36px',
                                    width: '400px',
                                    height: '64px',
                                    fontFamily: 'sans-serif',
                                }}> Customer Manage Form
                                </display4>

                                <display4 style={{
                                    width: '0',
                                    height: '0',
                                    borderTop: '32px solid transparent',
                                    borderLeft: '66px solid #0000A5',
                                    borderBottom: '32px solid transparent'
                                }}></display4>

                                <div style={{position: 'relative', width: '50px'}}></div>

                                <Button variant="contained" style={{
                                    backgroundColor: 'white',
                                    width: '115px',
                                    height: '33px',
                                    color: '#000080',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',
                                }}>Home</Button>

                                <div style={{position: 'relative', width: '10px'}}></div>

                                <Button variant="contained" style={{
                                    backgroundColor: 'white',
                                    width: '250px',
                                    height: '33px',
                                    color: '#000080',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',

                                }}>Rental Request Manage </Button>

                                <div style={{position: 'relative', width: '10px'}}></div>

                                <Button variant="contained" style={{
                                    backgroundColor: 'white',
                                    width: '180px',
                                    height: '33px',
                                    color: '#000080',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',

                                }}>Car Manage Form</Button>

                                <div style={{position: 'relative', width: '10px'}}></div>

                                <Button variant="contained" style={{
                                    backgroundColor: 'white',
                                    width: '115px',
                                    height: '33px',
                                    color: '#000080',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',

                                }}>Menu</Button>

                            </Toolbar>
                        </AppBar>
                    </div>

                    <div className={classes.main}>

                        <Grid container className={classes.form_background} spacing={3} onAnimationStart={'animate'}>

                            <Grid item>
                                <div style={{width: '100vw', height: '20%'}}></div>
                            </Grid>

                            <Grid item> <TextField id="outlined-basic" label="Customer Id" variant="outlined"

                                                   value={this.state.customerDerails.id}
                                                   onChange={(e) => {
                                                       let data = this.state.customerDerails
                                                       data.id = e.target.value
                                                       this.setState({data})
                                                   }}

                            /></Grid>
                            <Grid item> <TextField id="outlined-basic" label="Email" variant="outlined"

                                                   value={this.state.customerDerails.email}
                                                   onChange={(e) => {
                                                       let data = this.state.customerDerails
                                                       data.email = e.target.value
                                                       this.setState({data})
                                                   }}
                            /></Grid>

                            <Grid item> <TextField id="outlined-basic" label="UserName" variant="outlined"

                                                   value={this.state.customerDerails.userName}
                                                   onChange={(e) => {
                                                       let data = this.state.customerDerails
                                                       data.userName = e.target.value
                                                       this.setState({data})
                                                   }}

                            /></Grid>
                            <Grid item> <TextField id="outlined-basic" label="New Password" variant="outlined"

                                                   value={this.state.customerDerails.password}
                                                   onChange={(e) => {
                                                       let data = this.state.customerDerails
                                                       data.password = e.target.value
                                                       this.setState({data})
                                                   }}
                            /></Grid>
                            <Grid item> <TextField id="outlined-basic" label="Address" variant="outlined"

                                                   value={this.state.customerDerails.address}
                                                   onChange={(e) => {
                                                       let data = this.state.customerDerails
                                                       data.address = e.target.value
                                                       this.setState({data})
                                                   }}
                            /></Grid>
                            <Grid item> <TextField id="outlined-basic" label="Contact" variant="outlined"

                                                   value={this.state.customerDerails.contactNum}
                                                   onChange={(e) => {
                                                       let data = this.state.customerDerails
                                                       data.contactNum = e.target.value
                                                       this.setState({data})
                                                   }}
                            /></Grid>

                            <Grid item> <Autocomplete
                                id="combo-box-demo"
                                options={[{title: 'Driving Licence'}, {title: 'NIC Number'}]}
                                getOptionLabel={(option) => option.title}
                                style={{width: 300}}
                                renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined"/>}
                                onChange={(event, value) => {
                                    switch (value.title) {
                                        case "NIC Number" :
                                            let data1 = this.state.customerDerails.drivingLicence='';
                                            this.setState({data1, TextLabel: "NIC NUMBER",});break;

                                        case  "Driving Licence" :
                                            let data2 = this.state.customerDerails.nic='';
                                            this.setState({data2, TextLabel: "Driving Licence",});break;
                                    }
                                }}

                            /></Grid>

                            <Grid item> <TextField id="outlined-basic"
                                                   label={this.state.TextLabel}
                                                   variant="outlined"
                                                   onChange={(e) => {
                                                       switch (this.state.TextLabel) {
                                                           case "NIC NUMBER" :
                                                               let data1 = this.state.customerDerails
                                                               data1.nic = e.target.value
                                                               this.setState({data1});break;

                                                           case  "Driving Licence" :
                                                               let data2 = this.state.customerDerails
                                                               data2.drivingLicence = e.target.value
                                                               this.setState({data2});break;
                                                       }
                                                   }}
                            /></Grid>

                            <Grid item className={classes.imageContainer}>

                                <div className={classes.imageDiv} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '75%',
                                    width: '30%',
                                    backgroundImage: "url(" + this.state.IDFrontView + ")",
                                    backgroundSize: 'cover'
                                }}>

                                </div>

                                <div className={classes.imageDiv} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '75%',
                                    width: '30%',
                                    backgroundImage: "url(" + this.state.IDBackView + ")",
                                    backgroundSize: 'cover'
                                }}>

                                </div>

                            </Grid>

                            <Grid item className={classes.uploadImageButton}>

                                <div><input

                                    style={{display: 'none'}}
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file01"
                                    multiple
                                    type="file"
                                    onChange={(e) => {
                                        this.setState({
                                            IDFrontView: URL.createObjectURL(e.target.files[0]),
                                            IDFrontImage : e.target.files[0]
                                        })
                                    }}
                                />
                                    <label htmlFor="contained-button-file01">
                                        <Button variant="contained" color="primary" component="span">
                                            Upload
                                        </Button>
                                    </label>
                                </div>

                                <div><input
                                    style={{display: 'none'}}
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file02"
                                    multiple
                                    type="file"
                                    onChange={(e) => {
                                        this.setState({
                                            IDBackView : URL.createObjectURL(e.target.files[0]),
                                            IDBackImage : e.target.files[0]

                                        })
                                    }}
                                />
                                    <label htmlFor="contained-button-file02">
                                        <Button variant="contained" color="primary" component="span">
                                            Upload
                                        </Button>
                                    </label>

                                </div>


                            </Grid>

                            <Grid item>
                                <div style={{width: '100vw', height: '20%'}}></div>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.button_background} spacing={2}>
                            <Grid item>
                                <Button variant="contained" style={{
                                    backgroundColor: 'blue',
                                    width: '120px',
                                    height: '50px',
                                    color: '#3BB9FF',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',

                                }}
                                        onClick={async () => {
                                            await this.registerCustomer();

                                        }}
                                >Register</Button></Grid>

                            <Grid item> <TextField id="outlined-basic" label="Search Id" variant="outlined"/></Grid>

                            <Grid item>
                                <Button variant="contained" style={{
                                    backgroundColor: 'blue',
                                    width: '120px',
                                    height: '50px',
                                    color: '#3BB9FF',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',
                                }}>Search</Button></Grid>

                            <Grid item>
                                <Button variant="contained" style={{
                                    backgroundColor: 'blue',
                                    width: '120px',
                                    height: '50px',
                                    color: '#3BB9FF',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',
                                }}>Update</Button></Grid>

                            <Grid item>
                                <Button variant="contained" style={{
                                    backgroundColor: 'blue',
                                    width: '120px',
                                    height: '50px',
                                    color: '#3BB9FF',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',
                                }}>Clear all</Button></Grid>

                            <Grid item>

                                <Button variant="contained" style={{
                                    backgroundColor: 'blue',
                                    width: '120px',
                                    height: '50px',
                                    color: '#3BB9FF',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',
                                }}>Back</Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>

                {/*<div className={classes.tableContainer} style={{}}>
                    <div className={classes.tableView}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table" s>
                                <TableHead style={{backgroundColor:'#98AFC7'}}>
                                    <TableRow>
                                        <TableCell>Customer Id</TableCell>
                                        <TableCell align="right">Email</TableCell>
                                        <TableCell align="right">User Name</TableCell>
                                        <TableCell align="right">New Password</TableCell>
                                        <TableCell align="right">NIC Number and Photo</TableCell>
                                        <TableCell align="right">License Number and Photo</TableCell>
                                        <TableCell align="right">Address</TableCell>
                                        <TableCell align="right">contact Number</TableCell>
                                        <TableCell align="right">delete</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
                                            <TableCell align="right">{row.button}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>*/}
            </Fragment>
        )
    }

}

/*
export default withStyles(styleSheet)(RegisterCustomer)*/
