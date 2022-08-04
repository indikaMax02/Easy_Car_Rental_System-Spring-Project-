

import React from "react";
import NewHome from "../pages/customerPages/home";
import ManageCar from "../pages/adminPages/manageCar";
import TestApp from "../TestReactExample";
import RegisterCustomer from "../pages/customerPages/register";
import RentalRequest from "../components/customer/rentalRequest";
import ManageDriver from "../pages/adminPages/ManageDriver/ManageDriver";
import AlertMessage from "../components/customer/Confirm alert";
import ConfirmAlert from "../components/customer/Confirm alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Router} from "react-router";


function App() {
  return (

   <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<NewHome data={{customerId : 'C-001'}}/>}/>
              <Route path="/manageCar" element={<ManageCar/>} />
          </Routes>
   </BrowserRouter>

  );
}

export default App;
