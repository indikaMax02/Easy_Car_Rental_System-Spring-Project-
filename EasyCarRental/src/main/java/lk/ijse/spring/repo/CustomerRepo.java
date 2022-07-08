package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;



public interface CustomerRepo extends JpaRepository<Customer,String> {

    @Query("select c from Customer c where c.email=?1")
    public Customer getCustomerByEmail(String email);

}
