package org.factoriaf5.comicbooks.comics;
import org.factoriaf5.comicbooks.genres.Genre;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class ComicServiceTest {

    @MockBean
    private ComicRepository comicRepository;

    @Test
    public void testGetAllComics() {
        when(comicRepository.findAll()).thenReturn(List.of(new Comic(), new Comic()));

        ComicService service = new ComicService(comicRepository);

        List<Comic> comics = service.getAll();

        verify(comicRepository, times(1)).findAll();

        assertNotNull(comics);
        assertEquals(2, comics.size());
    }

    @Test
    public void testGetComicByIsbn() {
        String isbn = "1234567890";
        Comic mockComic = new Comic();
        mockComic.setIsbn(isbn);

        // Mock the repository's findByIsbn method
        when(comicRepository.findByIsbn(isbn)).thenReturn(Optional.of(mockComic));

        ComicService service = new ComicService(comicRepository);

        Optional<Comic> comic = service.getComicByIsbn(isbn);

        verify(comicRepository, times(1)).findByIsbn(isbn);

        assertTrue(comic.isPresent());
        assertEquals(isbn, comic.get().getIsbn());
    }

    @Test
    public void testCreateComic() {
        Comic mockComic = new Comic();
        when(comicRepository.save(any(Comic.class))).thenReturn(mockComic);

        ComicService service = new ComicService(comicRepository);

        Comic comicToCreate = new Comic();
        Comic response = service.create(comicToCreate);

        verify(comicRepository, times(1)).save(comicToCreate);

        assertNotNull(response);
    }
/* 
    @Test
    public void testCreateComicWithGenres() {
        Comic mockComic = new Comic();
        when(comicRepository.save(any(Comic.class))).thenReturn(mockComic);

        ComicService service = new ComicService(comicRepository);

        Comic comicToCreate = new Comic();
        Genre[] genres = new Genre[]{new Genre(5555L, "terror psicologico"), new Genre(85583, "deporte")};
        Comic response = service.create(comicToCreate, genres);

        verify(comicRepository, times(1)).save(comicToCreate);

        assertNotNull(response);
    } */

    @Test
    public void testUpdateComic() {
        String isbn = "1234567890";
        Comic mockComic = new Comic();
        when(comicRepository.findByIsbn(isbn)).thenReturn(Optional.of(mockComic));
        when(comicRepository.save(any(Comic.class))).thenReturn(mockComic);

        ComicService service = new ComicService(comicRepository);

        Comic updatedComic = new Comic();
        Comic response = service.update(isbn, updatedComic);

        verify(comicRepository, times(1)).findByIsbn(isbn);
        verify(comicRepository, times(1)).save(mockComic);

        assertNotNull(response);
    }

    

}
