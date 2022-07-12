package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.RentalRequestDTO;

import java.util.List;

public interface AdminService {

    public List<RentalRequestDTO> getAllRentalRequest();
}
