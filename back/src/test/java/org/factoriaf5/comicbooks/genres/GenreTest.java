package org.factoriaf5.comicbooks.genres;
import org.factoriaf5.comicbooks.comics.Comic;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

public class GenreTest {

    @Mock
    private Set<Comic> comics;

    private Genre genre;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        genre = new Genre(20L,"Ciencia ficcion");
    }

    @Test
    public void testGetId() {
        assertEquals(20L, genre.getId());
    }

    @Test
    public void testGetName() {
        assertEquals("Ciencia ficcion", genre.getName());
    }

  
}