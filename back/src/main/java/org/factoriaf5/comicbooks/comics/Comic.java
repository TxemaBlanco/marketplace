package org.factoriaf5.comicbooks.comics;

import java.util.ArrayList;
import java.util.List;

import org.factoriaf5.comicbooks.genres.Genre;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;



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
    @Column(length = 2000)
    private String synopsis;
    private int stock;

    @ManyToMany(mappedBy = "comics")
    private List<Genre> genres = new ArrayList<>();

    public Comic() {
    }

    public Comic(String isbn, String title, String author, Boolean ishardcover, String photo, float price, String synopsis, int stock) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.ishardcover = ishardcover;
        this.photo = photo;
        this.price = price;
        this.synopsis = synopsis;
        this.stock = stock;
    }
    public void addGenre(Genre genre){
        genres.add(genre);
    }    
}
