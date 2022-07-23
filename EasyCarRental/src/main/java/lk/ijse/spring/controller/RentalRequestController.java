package lk.ijse.spring.controller;

import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.service.RentalRequestService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class RentalRequestController {

    @Autowired
    RentalRequestService rentalRequestService;


    @PostMapping(path = "rentalRequest")
    public ResponseUtil rentalRequest(@RequestBody RentalRequestDTO rentalRequestDTO){
        rentalRequestService.rentalRequest(rentalRequestDTO);
        return new ResponseUtil(200,"renatalRequest recevied",null);
    }
}
