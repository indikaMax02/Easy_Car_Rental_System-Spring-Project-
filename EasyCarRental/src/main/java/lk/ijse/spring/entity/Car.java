package lk.ijse.spring.entity;

import lk.ijse.spring.embeded.PriceOfRentDuration;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Car {
    @Id
    private String vehicleId;
    private String brand;
    private String image;
    private int NumOfPassenger;
    private String transmissionType;
    private String fuelType;
    private PriceOfRentDuration priceOfRentDuration;
    private String freeMileageForPriceAndDuration;
    private String priceOfExtraKm;
    private String registerNumber;
    private String state;

    @OneToMany(mappedBy = "car")
    private Set<DriverSchedule> driverSchedule=new HashSet<DriverSchedule>();



}
