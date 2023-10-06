package org.factoriaf5.comicbooks.genres;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GenresService {
    GenresRepository  repository;

    @Autowired
    public GenresService(GenresRepository repository) {
        this.repository = repository;
    }
 
       public Genre create(Genre genre){
         Genre genreSaved = repository.save(genre);
        return genreSaved;
    }
    public List<Genre> getAll() {
        List<Genre> genre = repository.findAll();
        return genre;
    }
    public Genre findById(Long id) {
     Genre genre =  repository.findById(id).orElseThrow();
        return genre;
    }
  
 
}
