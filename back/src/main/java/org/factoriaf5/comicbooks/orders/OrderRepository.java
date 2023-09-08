package org.factoriaf5.comicbooks.orders;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long>{
    // Optional<List<Order>> findByCustomersEmail (String customerEmail);
    // @Query(value = "SELECT * FROM orders t1 INNER JOIN customer_order t2 ON t1.id = t2.order_id WHERE customer_email = ?1")
    List<Order> findAllByCustomerEmail (String customerEmail);
}
