package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Customer;

public interface CustomerService {
    void saveCustomer(CustomerDTO customer);
}
