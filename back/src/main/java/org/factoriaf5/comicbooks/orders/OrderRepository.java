package org.factoriaf5.comicbooks.orders;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long>{
  
    List<Order> findAllByCustomerEmail (String customerEmail);
}
