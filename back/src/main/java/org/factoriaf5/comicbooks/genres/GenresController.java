package org.factoriaf5.comicbooks.genres;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/genres")
public class GenresController {
    private GenresService service;
    
    @Autowired
    public GenresController(GenresService service){
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Genre>>  findAll(){
        List<Genre> serviceGetAll = service.getAll();
        return ResponseEntity.status(HttpStatus.OK).body(serviceGetAll);
    }
    @PostMapping
    public ResponseEntity<Genre> create(@RequestBody Genre genre){
        Genre serviceSaved = service.create(genre);
        return ResponseEntity.status(HttpStatus.OK).body(serviceSaved);
    }

    @GetMapping(path = {"/{id}"})
    public ResponseEntity<Genre> findOne(@PathVariable("id") Long id){
        Genre findbyid = service.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(findbyid);
    }
}