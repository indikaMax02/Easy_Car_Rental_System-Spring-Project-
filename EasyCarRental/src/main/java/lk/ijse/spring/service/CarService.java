package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDTO;

public interface CarService {
    public void addCar(CarDTO carDTO);
    public void editCar(CarDTO carDTO);
    public void deleteCar(CarDTO carDTO);
}
