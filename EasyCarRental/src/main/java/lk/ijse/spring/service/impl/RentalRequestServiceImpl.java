package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.RentalRequest;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.repo.RentalRequestRepo;
import lk.ijse.spring.service.RentalRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RentalRequestServiceImpl implements RentalRequestService {

    @Autowired
    private CustomerRepo repo;

    @Autowired
    private CarRepo carRepo;

    @Autowired
    private RentalRequestRepo rentalRequestRepo;

    @Override
    public void rentalRequest(RentalRequestDTO rentalRequestDTO) {


            Customer customer = repo.getCustomerById(rentalRequestDTO.getCustomerId());
            Car car = carRepo.getCarById(rentalRequestDTO.getVehicleId());

            RentalRequest rentalRequest = new RentalRequest();

            rentalRequest.setCustomer(customer);
            rentalRequest.setCar(car);
            rentalRequest.setPickupDateAndTime(rentalRequestDTO.getPickupDateAndTime());
            rentalRequest.setReturnDateAndTime(rentalRequestDTO.getReturnDateAndTime());
            rentalRequest.setRentPayment("00");
            rentalRequest.setDamagePaySlip(rentalRequestDTO.getDamageSlip());
            rentalRequest.setState("pending");
            rentalRequestRepo.save(rentalRequest);

    }
}
