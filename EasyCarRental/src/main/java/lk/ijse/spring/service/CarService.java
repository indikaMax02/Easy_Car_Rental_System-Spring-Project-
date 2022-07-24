package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.entity.Car;

import java.util.List;

public interface CarService {
    public void addCar(CarDTO carDTO);
    public void editCar(CarDTO carDTO);
    public void deleteCar(CarDTO carDTO);
    public List<CarDTO> getAllCars();
}
