package org.factoriaf5.comicbooks.orders;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long>{
    // Optional<List<Order>> findByCustomersEmail (String customerEmail);
    List<Order> findByCustomersEmail (String customerEmail);
}
