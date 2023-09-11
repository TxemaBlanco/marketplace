package org.factoriaf5.comicbooks.comics;

// import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.factoriaf5.comicbooks.customers.Customer;
import org.factoriaf5.comicbooks.genres.Genre;
import org.factoriaf5.comicbooks.orders.Order;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;



@Entity
@Table(name="comics")
@Getter
@Setter
public class Comic {
    @Id
    @Column(name = "isbn", nullable = false)
    private String isbn;
    
    private String title;
    private String author;
    private Boolean ishardcover;
    private String photo;
    private float price;
    private String synopsis;
    private int stock;


    @OneToMany(mappedBy = "comic")
    Set<Order> order;

    
    public Comic(){}

    
    public Comic(String isbn, Order[] customerBooks){
        this.isbn = isbn;
         for(Order customerBook : customerBooks){
        customerBook  = (Order) Stream.of(customerBook).collect(Collectors.toSet());
     }
    }

    /*  public void addGenre(Genre genre){
        genres.add(genre);
    } */ 

    
}
