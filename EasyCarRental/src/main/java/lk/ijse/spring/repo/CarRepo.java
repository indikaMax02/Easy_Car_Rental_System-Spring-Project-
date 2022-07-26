package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CarRepo extends JpaRepository<Car,String> {

    @Query("select v from Car v where v.vehicleId=?1")
    public Car getCarById(String id);

}
