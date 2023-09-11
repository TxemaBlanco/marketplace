package org.factoriaf5.comicbooks.orders;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.Flow.Publisher;

import jakarta.persistence.EmbeddedId;

import org.factoriaf5.comicbooks.comics.Comic;
import org.factoriaf5.comicbooks.customers.Customer;
/* import org.hibernate.mapping.Set; */

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.MapsId;
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
public class Order{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private Date date1;

   /*  @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "email", unique = false, nullable = true, insertable = true, updatable = true)
    @JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
    private Customer customer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "isbn", unique = false, nullable = true, insertable = true, updatable = true)
    @JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
    private Comic comic;  */

 /*    @ManyToMany
    @JoinTable(name="orders", joinColumns={@JoinColumn(name="order_id",referencedColumnName = "id")}, inverseJoinColumns={@JoinColumn(name="customer_email",referencedColumnName = "email")})
    private Set<Customer> customers = new HashSet<>(); */

    @ManyToOne
    @JoinColumn(name = "isbn")
    @JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
    Comic comic;

    @ManyToOne
    @JoinColumn(name = "email")
    @JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
    Customer customer;

    public Order(){}

    public Order(Comic comics, Date date1, Customer customers) {
        this.comic = comics;
        this.customer = customers;
        this.date1 = date1;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Order)) return false;
        Order that = (Order) o;
        return Objects.equals(comic.getIsbn(), that.comic.getIsbn()) &&
                Objects.equals(customer.getEmail(), that.customer.getEmail()) &&
                Objects.equals(date1, that.date1);
    }
    
    
    
    @Override
    public int hashCode() {
        return Objects.hash(comic.getIsbn(), customer.getEmail(), date1);
    }



} 
