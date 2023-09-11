package org.factoriaf5.comicbooks.genres;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;
public class GenresControllerTest {

    @Mock
    private GenresService genresService;

    @InjectMocks
    private GenresController genresController;

    @BeforeEach
    public void init() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testFindAll() {
        List<Genre> genres = new ArrayList<>();
        genres.add(new Genre(1111L, "Genre1"));
        genres.add(new Genre(22222L, "Genre2"));
        when(genresService.getAll()).thenReturn(genres);

        ResponseEntity<List<Genre>> response = genresController.findAll();

        assertEquals(HttpStatus.OK, response.getStatusCode());

        assertEquals(genres, response.getBody());
    }

    @Test
    public void testCreate() {
        Genre genreToCreate = new Genre(1111L, "Genre1");

        when(genresService.create(genreToCreate)).thenReturn(genreToCreate);

        ResponseEntity<Genre> response = genresController.create(genreToCreate);

        assertEquals(HttpStatus.OK, response.getStatusCode());

        assertEquals(genreToCreate, response.getBody());
    }

    @Test
    public void testFindOne() {
        Long genreId = 122221L;

        Genre genre = new Genre(genreId, "Genre1");

        when(genresService.findById(genreId)).thenReturn(genre);

        ResponseEntity<Genre> response = genresController.findOne(genreId);

        assertEquals(HttpStatus.OK, response.getStatusCode());

        assertEquals(genre, response.getBody());
    }
}
