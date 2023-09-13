package org.factoriaf5.comicbooks.orders;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import org.factoriaf5.comicbooks.comics.Comic;
import org.factoriaf5.comicbooks.customers.Customer;

public class OrderTest {

    @Test
    public void testGetAndSetId() {
        Order order = new Order();
        order.setId(1L);
        assertEquals(1L, order.getId());
    }

    @Test
    public void testGetAndSetDate() {
        Order order = new Order();
        java.util.Date date = new java.util.Date();
        order.setDate(date);
        assertEquals(date, order.getDate());
    }

    @Test
    public void testGetAndSetCustomer() {
        Order order = new Order();
        Customer customer = new Customer();
        customer.setEmail("customer1@gmail.com");
        order.setCustomer(customer);
        assertEquals("customer1@gmail.com", order.getCustomer().getEmail());
    }

    @Test
    public void testGetAndSetComic() {
        Order order = new Order();
        Comic comic = new Comic();
        comic.setIsbn("1234567890");
        order.setComic(comic);
        assertEquals("1234567890", order.getComic().getIsbn());
    }
}

