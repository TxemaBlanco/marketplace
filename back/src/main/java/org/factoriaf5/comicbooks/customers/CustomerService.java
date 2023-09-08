package org.factoriaf5.comicbooks.customers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    CustomerRepository repository;

    @Autowired
    public CustomerService(CustomerRepository repository) {
        this.repository = repository;
    }

    public Customer create(Customer customer) {
        return repository.save(customer);
    }

    public Customer findByEmail(String email) {
        return repository.findByEmail(email).orElseThrow();
    }

    public Customer update(String email, Customer newCustomer) {

        Customer currentCustomer = repository.findByEmail(email).orElseThrow();

        currentCustomer.setEmail(newCustomer.getEmail());
        currentCustomer.setDni(newCustomer.getDni());
        currentCustomer.setName(newCustomer.getName());
        currentCustomer.setSurname(newCustomer.getSurname());
        currentCustomer.setSurname2(newCustomer.getSurname2());
        currentCustomer.setStreet(newCustomer.getStreet());
        currentCustomer.setNumber(newCustomer.getNumber());
        currentCustomer.setGate(newCustomer.getGate());
        currentCustomer.setStairs(newCustomer.getStairs());
        currentCustomer.setFloor(newCustomer.getFloor());
        currentCustomer.setLetter(newCustomer.getLetter());
        currentCustomer.setPostalcode(newCustomer.getPostalcode());
        currentCustomer.setTown(newCustomer.getTown());
        currentCustomer.setProvince(newCustomer.getProvince());
        currentCustomer.setPassword(newCustomer.getPassword());
        return repository.save(currentCustomer);
    }

    public Customer delete(String email) {
        Customer customer1 = repository.findByEmail(email).orElseThrow();
        repository.delete(customer1);
        return customer1;
    }

    public List<Customer> getAll() {
        return repository.findAll();
    }
}
