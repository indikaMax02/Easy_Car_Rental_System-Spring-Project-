package lk.ijse.spring.repo;

import lk.ijse.spring.entity.RentalRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface RentalRequestRepo extends JpaRepository<RentalRequest,String> {
}
