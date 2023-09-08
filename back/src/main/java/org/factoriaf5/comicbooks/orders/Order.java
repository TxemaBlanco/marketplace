package org.factoriaf5.comicbooks.orders;

import java.util.HashSet;
import java.util.Set;

import org.factoriaf5.comicbooks.comics.Comic;
import org.factoriaf5.comicbooks.customers.Customer;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="orders")
@Getter
@Setter
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private java.util.Date date;

    @Column
    public String customer_email;

    // @ManyToOne
    // @JoinColumn(name="customer_email",nullable=false)
    // private Customer customer;

    @ManyToOne
    @JoinColumn(name="comic_isbn",nullable=false)
    private Comic comic;  

    // @ManyToMany(mappedBy = "orders")    
    // private Set<Customer> customers = new HashSet<>();
    
    @ManyToMany
    @JoinTable(name="customers_orders", joinColumns={@JoinColumn(name="order_id",referencedColumnName = "id")}, inverseJoinColumns={@JoinColumn(name="customer_email",referencedColumnName = "email")})
    private Set<Customer> customers = new HashSet<>();

     
        
}
