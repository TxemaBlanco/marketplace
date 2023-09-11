package org.factoriaf5.comicbooks.customers;

import org.factoriaf5.comicbooks.comics.Comic;
import org.factoriaf5.comicbooks.genres.Genre;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;


public class CustomerTest {
    
     @Mock
     private Customer customer;

     @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        customer = new Customer("user@user.com","29920371A","Lola","Flores","Rosas","La buenecita",14,"3","dcha","3","A",30033,"Madrid", "Madrid", "$2a$12$BwyEzyYm8ssMjYY9HLvrq.LwIxYbfApeAM41kyP7o6ZyYq8B542wO");
    }

    @Test
    public void testGetemail() {
        assertEquals("user@user.com", customer.getEmail());
    }

    @Test
    public void testGetDni() {
        assertEquals("29920371A", customer.getDni());
    }

    @Test
    public void testGetName() {
        assertEquals("Lola", customer.getName());
    }

    @Test
    public void testGetSurname() {
        assertEquals("Flores", customer.getSurname());
    }

    @Test
    public void testGetSurname2() {
        assertEquals("Rosas", customer.getSurname2());
    }

    @Test
    public void testGetStreet() {
        assertEquals("La buenecita", customer.getStreet());
    }

    @Test
    public void testGetNumber() {
        assertEquals(14, customer.getNumber());
    }

    @Test
    public void testGetGate() {
        assertEquals("3", customer.getGate());
    }

    @Test
    public void testGetStairs() {
        assertEquals("dcha", customer.getStairs());
    }

    @Test
    public void testGetFloor() {
        assertEquals("3", customer.getFloor());
    }

    @Test
    public void testGetLetter() {
        assertEquals("A", customer.getLetter());
    }

    @Test
    public void testGetPostalCode() {
        assertEquals(30033, customer.getPostalcode());
    }

    @Test
    public void testGetTown() {
        assertEquals("Madrid", customer.getTown());
    }

      @Test
    public void testGetProvince() {
        assertEquals("Madrid", customer.getProvince());
    }

    @Test
    public void testGetPassword() {
        assertEquals("$2a$12$BwyEzyYm8ssMjYY9HLvrq.LwIxYbfApeAM41kyP7o6ZyYq8B542wO", customer.getPassword());
    }
}
