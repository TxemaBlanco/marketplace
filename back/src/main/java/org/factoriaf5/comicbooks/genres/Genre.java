package org.factoriaf5.comicbooks.genres;

import java.util.Set;

import jakarta.persistence.*;
import org.factoriaf5.comicbooks.comics.Comic;


@Entity
@Table(name = "genres")
public class Genre {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    @Column(name = "id")
    private  Long id;
    @Column(name = "name")
    private String name;

    public Genre(){
        
    }    
    public Genre(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    @ManyToMany(fetch= FetchType.EAGER, cascade = {CascadeType.ALL})
    @JoinTable(name="comics_genres", joinColumns={@JoinColumn(name="genre_id")}, inverseJoinColumns={@JoinColumn(name="comic_isbn")})
    Set<Comic> comics;
}


