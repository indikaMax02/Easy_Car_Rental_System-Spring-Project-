package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Transactional
public interface DriverRepo  extends JpaRepository<Driver,String> {

    @Query(value = "select * from Driver where state='active'", nativeQuery = true)
    public List<Driver> getDriverByActive();
}
