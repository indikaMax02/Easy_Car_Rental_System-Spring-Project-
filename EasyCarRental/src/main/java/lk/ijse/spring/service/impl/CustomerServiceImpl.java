package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.RegisterCustomerDTO;
import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.CustomerUserAccount;
import lk.ijse.spring.entity.RentalRequest;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.repo.CustomerUserAccountRepo;
import lk.ijse.spring.repo.RentalRequestRepo;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepo repo;

    @Autowired
    private CustomerUserAccountRepo customerUserAccountRepo;

    @Autowired
    private CarRepo carRepo;

    @Autowired
    private RentalRequestRepo rentalRequestRepo;

    @Autowired
    private ModelMapper mapper;



    @Override
    public void saveCustomer(RegisterCustomerDTO registerCustomerDTO){
        if(!repo.existsById(registerCustomerDTO.getId())) {

            repo.save(mapper.map(registerCustomerDTO,Customer.class));

         if (!customerUserAccountRepo.existsById(registerCustomerDTO.getUsername())) {

             customerUserAccountRepo.save(mapper.map(registerCustomerDTO,CustomerUserAccount.class));
         }else {
             throw new RuntimeException("UserAccount Already Exist");
         }
        }else {
            throw new RuntimeException("Customer Already Exist");
        }
    }

    @Override
    public void updateCustomerInformation(CustomerDTO customerDTO) {
        if (repo.existsById(customerDTO.getId())){
            repo.save(mapper.map(customerDTO,Customer.class));
        }else {
            throw new RuntimeException("Customer Update Fail");
        }
    }

    @Override
    public List<CarDTO> viewCars() {

        List<Car> all = carRepo.findAll();
        List<CarDTO> vehicleDTOS = new ArrayList();

        for (Car v: all) {
           vehicleDTOS.add(mapper.map(v,CarDTO.class));
        }
        return vehicleDTOS;

    }

    @Override
    public void rentalRequest(RentalRequestDTO rentalRequestDTO) {

        if (!rentalRequestRepo.existsById(rentalRequestDTO.getRequestId())){

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
      }


    }


}
