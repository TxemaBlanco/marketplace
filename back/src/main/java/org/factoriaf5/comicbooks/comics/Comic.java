package org.factoriaf5.comicbooks.comics;

// import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

import org.factoriaf5.comicbooks.genres.Genre;
import org.factoriaf5.comicbooks.orders.Order;

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

    // @JsonIgnore
    @ManyToMany(mappedBy = "comics")
    List<Genre> genres;

    @OneToMany(mappedBy = "comic", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Order> customers = new ArrayList<>();

    public void addGenre(Genre genre){
        genres.add(genre);
    }

    
}
