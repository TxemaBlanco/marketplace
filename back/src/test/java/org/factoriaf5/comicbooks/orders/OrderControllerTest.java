package org.factoriaf5.comicbooks.orders;
import org.factoriaf5.comicbooks.comics.Comic;
import org.factoriaf5.comicbooks.customers.Customer;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.when;

@SpringBootTest
@AutoConfigureMockMvc
public class OrderControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private OrderService orderService;

    @BeforeEach
    void setUp() {
        // Configurar el comportamiento del servicio mock
        List<Order> mockOrders = new ArrayList<>();
        Order order1 = new Order(1L, new java.util.Date(), new Customer("customer1@gmail.com", null, null, null, null, null, 0, null, null, null, null, 0, null, null, null), new Comic());
        Order order2 = new Order(2L, new java.util.Date(), new Customer("customer1@gmail.com", null, null, null, null, null, 0, null, null, null, null, 0, null, null, null), new Comic());
        mockOrders.add(order1);
        mockOrders.add(order2);

        when(orderService.getAll()).thenReturn(mockOrders);

        Long orderId = 1L;
        when(orderService.getOrderById(orderId)).thenReturn(Optional.of(order1));

        String customerEmail = "customer1@gmail.com";
        when(orderService.getAllFromCustomer(customerEmail)).thenReturn(mockOrders);
    }

    @Test
    public void testGetAllOrders() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/orders")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void testGetOrderById() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/orders/1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void testGetOrdersByEmail() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/orders/customer/customer1@gmail.com")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
   public void testCreateOrder() throws Exception {
    ObjectMapper objectMapper = new ObjectMapper();
    Order orderToCreate = new Order(3L, new java.util.Date(), new Customer("customer3@gmail.com", null, null, null, null, null, 0, null, null, null, null, 0, null, null, null), new Comic());

    mockMvc.perform(MockMvcRequestBuilders.post("/orders")
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectMapper.writeValueAsString(orderToCreate)))
            .andExpect(MockMvcResultMatchers.status().isOk());
}
@Test
public void testCreateOrderWithValidData() throws Exception {
    ObjectMapper objectMapper = new ObjectMapper();
    
    Customer customer = new Customer(
        "Sonia@gmail.com",
        "12345678A",
        "Sonia",
        "Cruz",
        "Santos",
        "Street",
        42,
        "A",
        "1",
        "2",
        "B",
        12345,
        "City",
        "State",
        "password123"
    );
    Order orderToCreate = new Order(3L, new java.util.Date(), customer, new Comic("ISBN", "Title", "Author", true, "image.jpg", 0, "synopsis", 0));

    when(orderService.create(Mockito.any(Order.class))).thenReturn(orderToCreate);

    mockMvc.perform(MockMvcRequestBuilders.post("/orders")
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectMapper.writeValueAsString(orderToCreate)))
            .andExpect(MockMvcResultMatchers.status().isOk())
            .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(3L))
            .andExpect(MockMvcResultMatchers.jsonPath("$.customer.email").value("Sonia@gmail.com"))
            .andExpect(MockMvcResultMatchers.jsonPath("$.customer.dni").value("12345678A"))
            .andExpect(MockMvcResultMatchers.jsonPath("$.customer.name").value("Sonia"))
            .andExpect(MockMvcResultMatchers.jsonPath("$.customer.surname").value("Cruz"))
            .andExpect(MockMvcResultMatchers.jsonPath("$.customer.surname2").value("Santos"))
            .andExpect(MockMvcResultMatchers.jsonPath("$.customer.street").value("Street"))
            .andExpect(MockMvcResultMatchers.jsonPath("$.customer.number").value(42))
            .andExpect(MockMvcResultMatchers.jsonPath("$.customer.gate").value("A"))
            .andExpect(MockMvcResultMatchers.jsonPath("$.customer.stairs").value("1"))
            .andExpect(MockMvcResultMatchers.jsonPath("$.customer.floor").value("2"))
            .andExpect(MockMvcResultMatchers.jsonPath("$.customer.letter").value("B"))
            .andExpect(MockMvcResultMatchers.jsonPath("$.customer.postalcode").value(12345))
            .andExpect(MockMvcResultMatchers.jsonPath("$.customer.town").value("City"))
            .andExpect(MockMvcResultMatchers.jsonPath("$.customer.province").value("State"))
            .andExpect(MockMvcResultMatchers.jsonPath("$.customer.password").value("password123"))
            .andExpect(MockMvcResultMatchers.jsonPath("$.comic.isbn").value("ISBN"))
            .andExpect(MockMvcResultMatchers.jsonPath("$.comic.title").value("Title"))
            .andExpect(MockMvcResultMatchers.jsonPath("$.comic.author").value("Author"));
            
            
}
}
