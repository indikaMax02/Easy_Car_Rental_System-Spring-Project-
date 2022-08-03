package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.entity.Car;

import java.util.List;

public interface CarService {
    public void addCar(CarDTO carDTO);
    public void editCar(CarDTO carDTO);
    public void deleteCar(String carId);
    public List<CarDTO> getAllCars();
    public CarDTO getCarById(String carId);
}
