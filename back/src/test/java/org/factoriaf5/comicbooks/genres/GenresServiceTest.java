package org.factoriaf5.comicbooks.genres;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;

public class GenresServiceTest {
    private GenresService service;
    private GenresRepository repository;

    @Test
    public void testCreateGenre() {
        repository = mock(GenresRepository.class);

        Genre savedGenre = new Genre(999L,"accion");

        when(repository.save(any(Genre.class))).thenReturn(savedGenre);
        when(repository.findById(999L)).thenReturn(java.util.Optional.of(savedGenre));

        service = new GenresService(repository);

        Genre response = service.create(savedGenre);


        assertNotNull(response);

        assertEquals(999L, response.getId());
        assertEquals("accion", response.getName());

        Genre retrievedGenre = service.findById(999L);
        assertEquals(savedGenre, retrievedGenre);
    }
}
