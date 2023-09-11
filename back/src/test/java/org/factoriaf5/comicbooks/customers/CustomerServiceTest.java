package org.factoriaf5.comicbooks.customers;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import org.factoriaf5.comicbooks.genres.Genre;
import org.factoriaf5.comicbooks.genres.GenresRepository;
import org.factoriaf5.comicbooks.genres.GenresService;
import org.hibernate.mapping.List;
import org.junit.jupiter.api.Test;

import java.util.Optional;


public class CustomerServiceTest {
    private CustomerService service;
    private CustomerRepository repository;

    @Test
    public void testCreateCustomer() {
        repository = mock(CustomerRepository.class);

        Customer savedCustomer = new Customer("user@user.com","29920371A","Lola","Flores","Rosas","La buenecita",14,"3","dcha","3","A",30033,"Madrid", "Madrid", "$2a$12$BwyEzyYm8ssMjYY9HLvrq.LwIxYbfApeAM41kyP7o6ZyYq8B542wO");

        when(repository.save(any(Customer.class))).thenReturn(savedCustomer);
        when(repository.findByEmail("user@user.com")).thenReturn(java.util.Optional.of(savedCustomer));

        service = new CustomerService(repository);

        Customer response = service.create(savedCustomer);


        assertNotNull(response);

        assertEquals("user@user.com", response.getEmail());
        assertEquals("29920371A", response.getDni());
        assertEquals("Lola", response.getName());
        assertEquals("Flores", response.getSurname());
        assertEquals("Rosas", response.getSurname2());
        assertEquals("La buenecita", response.getStreet());
        assertEquals(14, response.getNumber());
        assertEquals("3", response.getGate());
        assertEquals("dcha", response.getStairs());
        assertEquals("3", response.getFloor());
        assertEquals("A", response.getLetter());
        assertEquals(30033, response.getPostalcode());
        assertEquals("Madrid", response.getTown());
        assertEquals("Madrid", response.getProvince());
        assertEquals("$2a$12$BwyEzyYm8ssMjYY9HLvrq.LwIxYbfApeAM41kyP7o6ZyYq8B542wO", response.getPassword());

        Customer retrievedCustomer = service.findByEmail("user@user.com");
        assertEquals(savedCustomer, retrievedCustomer);
    }

     @Test
    public void testGetAllCustomer() {
        
        repository = mock(CustomerRepository.class);

        java.util.List<Customer> CustomerGetAll = repository.findAll(); 

        when(repository.findAll()).thenReturn(CustomerGetAll);

        service = new CustomerService(repository);
        java.util.List<Customer> response = service.getAll();

        assertNotNull(response);
        
        assertEquals(response, CustomerGetAll);
    }

    @Test
    public void testUpdateCustomer() {
         repository = mock(CustomerRepository.class);

        Optional<Customer> CustomerGetByEmail = repository.findByEmail("user@user.com"); 

        when(repository.findByEmail("user@user.com")).thenReturn(CustomerGetByEmail);

        service = new CustomerService(repository);
        java.util.List<Customer> response = service.getAll();

        assertNotNull(response);
        
        assertEquals(response, CustomerGetAll);




    }



}
