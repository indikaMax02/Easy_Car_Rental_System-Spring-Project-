package lk.ijse.spring.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
public class CarDTO {
    private String vehicleId;
    private String brand;
    private String numOfPassenger;
    private String transmissionType;
    private String fuelType;
    private String priceOfRentDurationDaily;
    private String priceOfRentDurationMonthly;
    private String freeMileageForPriceAndDuration;
    private String priceOfExtraKm;
    private String registerNumber;
    private String color;
    private String state;


}
