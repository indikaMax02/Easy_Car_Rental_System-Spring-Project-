

import React from "react";
import NewHome from "../pages/customerPages/home";
import ManageCar from "../pages/adminPages/manageCar";
import TestApp from "../TestReactExample";
import RegisterCustomer from "../pages/customerPages/register";
import RentalRequest from "../components/customer/rentalRequest";
import ManageDriver from "../pages/adminPages/ManageDriver/ManageDriver";
import AlertMessage from "../components/customer/Confirm alert";
import ConfirmAlert from "../components/customer/Confirm alert";







function App() {
  return (
    /*  <ManageCar/>*/
     <NewHome data={{customerId : 'C-001'}}/>
     /* <ManageDriver/>*/
      /*<ConfirmAlert/>*/
  );
}

export default App;
