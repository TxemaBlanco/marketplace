package org.factoriaf5.comicbooks.comics;

import java.util.List;
import java.util.Optional;

import org.factoriaf5.comicbooks.customers.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/comics")
public class ComicController {
    private ComicService comicService;
    
    @Autowired
    public ComicController(ComicService service){
        this.comicService = service;
    }

   /*  @GetMapping
    public List<Comic> index(){
        List<Comic> comics = comicService.getAll();
        return comics;
    } */

     @GetMapping
    public ResponseEntity<List<Comic>> findAll() {
        List<Comic> serviceGetAll = comicService.getAll();
        return ResponseEntity.status(HttpStatus.OK).body(serviceGetAll);
    }



    @GetMapping(path = "/{isbn}")
    public ResponseEntity<Comic> getComicByIsbn(@PathVariable String isbn){
        Optional<Comic> optionalComic = comicService.getComicByIsbn(isbn);
        if(optionalComic.isPresent()){
            Comic comic = optionalComic.get();
            return ResponseEntity.ok(comic);
        }else{
            return ResponseEntity.notFound().build();
        }        
    }
}
