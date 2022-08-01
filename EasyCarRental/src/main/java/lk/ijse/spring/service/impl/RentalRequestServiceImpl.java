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

public class RentalRequestServiceImpl implements RentalRequestService {

    @Autowired
    private CustomerRepo repo;

    @Autowired
    private CarRepo carRepo;

    @Autowired
    private RentalRequestRepo rentalRequestRepo;

    @Override
    public void rentalRequest(RentalRequestDTO rentalRequestDTO) {
     /*   if (!rentalRequestRepo.existsById(rentalRequestDTO.getRequestId())){

            Customer customer = repo.getCustomerById(rentalRequestDTO.getCustomerId());
            Car car = carRepo.getCarById(rentalRequestDTO.getVehicleId());

            RentalRequest rentalRequest = new RentalRequest();
            rentalRequest.setRequestId(rentalRequestDTO.getRequestId());
            rentalRequest.setCustomer(customer);
            rentalRequest.setCar(car);
            rentalRequest.setPickupDateAndTime(rentalRequestDTO.getPickupDateAndTime());
            rentalRequest.setDamagePaySlip(rentalRequestDTO.getDamagePaySlip());
            rentalRequest.setRentPayment(rentalRequestDTO.getRentPayment());
            rentalRequest.setState("pending");
            rentalRequestRepo.save(rentalRequest);
        }else {
            throw new RuntimeException("Rental request Fail");
        }*/
    }
}
