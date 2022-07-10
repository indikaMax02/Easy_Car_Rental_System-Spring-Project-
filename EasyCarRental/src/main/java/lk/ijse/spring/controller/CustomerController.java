package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.RegisterCustomerDTO;
import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("customer")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @ResponseStatus
    @PostMapping(path = "guestUser/register",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil registerCustomer(@RequestBody RegisterCustomerDTO registerCustomerDTO){

          customerService.saveCustomer(registerCustomerDTO);


         return new ResponseUtil(200,"Customer added complete",null);

    }

    @GetMapping(path="guestUser/viewCar",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil ViewAllCar(){
        List<CarDTO> vehicleDTOS = customerService.viewCars();
        return new ResponseUtil(200,"All car Details received",vehicleDTOS);

    }

    @PostMapping(path = "rentalRequest")
    public ResponseUtil rentalRequest(@RequestBody RentalRequestDTO rentalRequestDTO){

        customerService.rentalRequest(rentalRequestDTO);
        return new ResponseUtil(200,"renatalRequest recevied",null);
    }

    @PutMapping
    public ResponseUtil updateCustomerInformation(@RequestBody CustomerDTO customerDTO){
          customerService.updateCustomerInformation(customerDTO);
        return new ResponseUtil(200,"Updated Customer Information",null);
    }





}
