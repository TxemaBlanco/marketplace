package org.factoriaf5.comicbooks.orders;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository repository){
        this.orderRepository = repository;
    }

    public List<Order> getAll(){
        List<Order> orders = orderRepository.findAll();
        return orders;
    }
    // public Optional<List<Order>> getAllFromCustomer(String customerEmail){
    //     return orderRepository.findByCustomersEmail(customerEmail);
    // }
    public List<Order> getAllFromCustomer(String customerEmail){
        return orderRepository.findByCustomersEmail(customerEmail);
    }
    public Optional<Order> getOrderById(long id){
        return orderRepository.findById(id);
    }


     public Order create(Order order) {
        return orderRepository.save(order);
    }


}
