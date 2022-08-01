package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.repo.RentalRequestRepo;
import lk.ijse.spring.service.CarService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CarServiceImpl implements CarService {
    @Autowired
    private CarRepo carRepo;

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private RentalRequestRepo rentalRequestRepo;

    @Override
    public void addCar(CarDTO carDTO) {

        if (!carRepo.existsById(carDTO.getVehicleId())){
            carRepo.save(mapper.map(carDTO, Car.class));
        }else {
            throw new RuntimeException("Car Already Exist");
        }

    }

    @Override
    public void editCar(CarDTO carDTO) {
        if (carRepo.existsById(carDTO.getVehicleId())){




            carRepo.save(mapper.map(carDTO,Car.class));

        }else{
            throw new RuntimeException("Car not found...");
        }
    }

    @Override
    public void deleteCar(String vehicleId) {
        if (carRepo.existsById(vehicleId)){
            carRepo.deleteById(vehicleId);
        }else{
            throw new RuntimeException("Car not found...");
        }
    }

    @Override
    public List<CarDTO> getAllCars() {

        long count = carRepo.count();
        if (count!=0){
            List<Car> all = carRepo.findAll();
            List<CarDTO> allcars=new ArrayList<>();
            for (Car car : all) {
                allcars.add(mapper.map(car,CarDTO.class));
            }

            return allcars;
        }else {
            throw new RuntimeException("Cars Empty...");
        }


    }


}
