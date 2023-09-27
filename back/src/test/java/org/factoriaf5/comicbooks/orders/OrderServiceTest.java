package org.factoriaf5.comicbooks.orders;

import org.factoriaf5.comicbooks.comics.Comic;
import org.factoriaf5.comicbooks.customers.Customer;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class OrderServiceTest {

    private OrderService orderService;
    private OrderRepository orderRepository;

    @BeforeEach
    void setUp() {
        orderRepository = mock(OrderRepository.class);
        orderService = new OrderService(orderRepository);
    }

    @Test
    public void testGetAllOrders() {
        List<Order> mockOrders = new ArrayList<>();
        mockOrders.add(new Order(1L, new java.util.Date(), new Customer("customer1@gmail.com", null, null, null, null, null, 0, null, null, null, null, 0, null, null, null), new Comic()));
        mockOrders.add(new Order(2L, new java.util.Date(), new Customer("customer2@gmail.com", null, null, null, null, null, 0, null, null, null, null, 0, null, null, null), new Comic()));
        when(orderRepository.findAll()).thenReturn(mockOrders);

        List<Order> orders = orderService.getAll();

        assertEquals(2, orders.size());
        assertEquals("customer1@gmail.com", orders.get(0).getCustomer().getEmail());
        assertEquals("customer2@gmail.com", orders.get(1).getCustomer().getEmail());
    }

    @Test
    public void testGetAllOrdersFromCustomer() {
        String customerEmail = "customer1@gmail.com";
        List<Order> mockOrders = new ArrayList<>();
        mockOrders.add(new Order(1L, new java.util.Date(), new Customer(customerEmail, null, null, null, null, null, 0, null, null, null, null, 0, null, null, null), new Comic()));
        mockOrders.add(new Order(2L, new java.util.Date(), new Customer(customerEmail, null, null, null, null, null, 0, null, null, null, null, 0, null, null, null), new Comic()));
        when(orderRepository.findAllByCustomerEmail(customerEmail)).thenReturn(mockOrders);

        List<Order> orders = orderService.getAllFromCustomer(customerEmail);

        assertEquals(2, orders.size());
        assertEquals(customerEmail, orders.get(0).getCustomer().getEmail());
        assertEquals(customerEmail, orders.get(1).getCustomer().getEmail());
    }

    @Test
    public void testGetOrderById() {
        long orderId = 1L;
        Order mockOrder = new Order(orderId, new java.util.Date(), new Customer("customer1@gmail.com", null, null, null, null, null, 0, null, null, null, null, 0, null, null, null), new Comic());
        when(orderRepository.findById(orderId)).thenReturn(Optional.of(mockOrder));

        Optional<Order> order = orderService.getOrderById(orderId);

        assertTrue(order.isPresent());
        assertEquals(orderId, order.get().getId());
        assertEquals("customer1@gmail.com", order.get().getCustomer().getEmail());
    }

    @Test
    public void testCreateOrder() {
        Order orderToCreate = new Order(null, new java.util.Date(), new Customer("customer1@gmail.com", null, null, null, null, null, 0, null, null, null, null, 0, null, null, null), new Comic());
        Order createdOrder = new Order(1L, new java.util.Date(), new Customer("customer1@gmail.com", null, null, null, null, null, 0, null, null, null, null, 0, null, null, null), new Comic());
        when(orderRepository.save(orderToCreate)).thenReturn(createdOrder);

        Order result = orderService.create(orderToCreate);

        assertNotNull(result);
        assertEquals(createdOrder.getId(), result.getId());
        assertEquals("customer1@gmail.com", result.getCustomer().getEmail());
    }
}