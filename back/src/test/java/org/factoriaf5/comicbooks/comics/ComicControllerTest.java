package org.factoriaf5.comicbooks.comics;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class ComicControllerTest {

    @Test
    public void testIndex() {
        ComicService service = mock(ComicService.class);
        when(service.getAll()).thenReturn(List.of(new Comic(), new Comic()));

        ComicController controller = new ComicController(service);

        List<Comic> comics = controller.index();

        verify(service, times(1)).getAll();

        assertNotNull(comics);
        assertEquals(2, comics.size());
    }

    @Test
    public void testGetComicByIsbnFound() {
        String isbn = "1234567890";
        ComicService service = mock(ComicService.class);
        Comic mockComic = new Comic();
        when(service.getComicByIsbn(isbn)).thenReturn(Optional.of(mockComic));

        ComicController controller = new ComicController(service);

        ResponseEntity<Comic> response = controller.getComicByIsbn(isbn);

        verify(service, times(1)).getComicByIsbn(isbn);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
    }

    @Test
    public void testGetComicByIsbnNotFound() {
        String isbn = "1234567890";
        ComicService service = mock(ComicService.class);
        when(service.getComicByIsbn(isbn)).thenReturn(Optional.empty());

        ComicController controller = new ComicController(service);

        ResponseEntity<Comic> response = controller.getComicByIsbn(isbn);

        verify(service, times(1)).getComicByIsbn(isbn);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertNull(response.getBody());
    }

    @Test
    public void testCreateComic() {
        ComicService service = mock(ComicService.class);
        Comic comicToCreate = new Comic();
        comicToCreate.setIsbn("1234567890");
        comicToCreate.setTitle("Mi Comic");
        comicToCreate.setAuthor("Autor del Comic");
        comicToCreate.setPrice(19.99f);
        comicToCreate.setPhoto("imagen.jpg");
        comicToCreate.setSynopsis("Una sinopsis larga...");
        comicToCreate.setStock(100);
        comicToCreate.setIshardcover(true);

        
        when(service.create(eq(comicToCreate))).thenReturn(comicToCreate);

        ComicController controller = new ComicController(service);

        ResponseEntity<Comic> response = controller.createComic(comicToCreate);

        verify(service, times(1)).create(eq(comicToCreate));
        assertEquals(HttpStatus.CREATED, response.getStatusCode()); 
        assertNotNull(response.getBody());

        assertEquals(comicToCreate, response.getBody());
    }

    @Test
public void testUpdate() {
    String isbn = "0000000000000";
    ComicService service = mock(ComicService.class);
    Comic updatedComic = new Comic();
    updatedComic.setTitle("Nuevo Título");
    updatedComic.setAuthor("Nuevo Autor");
    updatedComic.setPrice(25.99f);
    updatedComic.setPhoto("nueva_imagen.jpg");
    updatedComic.setSynopsis("Nueva sinopsis...");
    updatedComic.setStock(50);
    updatedComic.setIshardcover(false);

    when(service.update(eq(isbn), any(Comic.class))).thenReturn(updatedComic);

    ComicController controller = new ComicController(service);

    ResponseEntity<Comic> response = controller.updateComic(isbn, updatedComic);



    assertEquals(HttpStatus.OK, response.getStatusCode());
    assertNotNull(response.getBody());

    assertEquals(updatedComic, response.getBody());
}

}
