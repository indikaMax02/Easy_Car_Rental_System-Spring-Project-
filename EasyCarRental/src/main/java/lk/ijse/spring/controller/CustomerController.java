package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.service.CustomerServiceImpl;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.awt.*;

@RestController
@RequestMapping("customer")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil registerCustomer(@RequestBody CustomerDTO customerDTO){

        Customer customer = new Customer(customerDTO.getId(), customerDTO.getEmail(), customerDTO.getNic(), customerDTO.getDrivingLicence(), customerDTO.getAddress(), customerDTO.getContactNumber());
        customerService.saveCustomer(customer);

         return new ResponseUtil(200,"Customer addedd complete",null);

    }

}
