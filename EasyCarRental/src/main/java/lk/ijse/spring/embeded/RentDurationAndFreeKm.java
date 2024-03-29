package lk.ijse.spring.embeded;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Embeddable;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Embeddable
public class RentDurationAndFreeKm {
    private String dailyPrice;
    private String monthlyPrice;
    private String dailyFreeKm;
    private String monthlyFreeKm;
}
