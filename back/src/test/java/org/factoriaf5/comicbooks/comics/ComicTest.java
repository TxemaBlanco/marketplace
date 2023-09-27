package org.factoriaf5.comicbooks.comics;
import org.factoriaf5.comicbooks.genres.Genre;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;



public class ComicTest {

    @Test
    public void testAddGenre() {
        Comic comic = new Comic();

        Genre genre = new Genre(5555L, "terror psicologico");

        comic.addGenre(genre);

        assertTrue(comic.getGenres().contains(genre));
    }

    @Test
    public void testAddGenreMultipleGenres() {
        Comic comic = new Comic();

        Genre genre1 = new Genre(23191212L,"Aventura");


        Genre genre2 = new Genre(2319112L,"Fantasía");

        comic.addGenre(genre1);
        comic.addGenre(genre2);

        assertTrue(comic.getGenres().contains(genre1));
        assertTrue(comic.getGenres().contains(genre2));
    }

    @Test
    public void testAddGenreNull() {
        Comic comic = new Comic();

        assertTrue(comic.getGenres().isEmpty());
    }
       @Test
    public void testGetAndSetIsbn() {
        Comic comic = new Comic();
        comic.setIsbn("1234567890");
        assertEquals("1234567890", comic.getIsbn());
    }

    @Test
    public void testGetAndSetTitle() {
        Comic comic = new Comic();
        comic.setTitle("Mi Comic");
        assertEquals("Mi Comic", comic.getTitle());
    }

    @Test
    public void testGetAndSetAuthor() {
        Comic comic = new Comic();
        comic.setAuthor("Autor del Comic");
        assertEquals("Autor del Comic", comic.getAuthor());
    }

    @Test
    public void testGetAndSetIshardcover() {
        Comic comic = new Comic();
        comic.setIshardcover(true);
        assertTrue(comic.getIshardcover());
    }

    @Test
    public void testGetAndSetPhoto() {
        Comic comic = new Comic();
        comic.setPhoto("url_de_la_imagen.jpg");
        assertEquals("url_de_la_imagen.jpg", comic.getPhoto());
    }

    @Test
    public void testGetAndSetPrice() {
        Comic comic = new Comic();
        comic.setPrice(19.99f);
        assertEquals(19.99f, comic.getPrice(), 0.001);
    }

    @Test
    public void testGetAndSetSynopsis() {
        Comic comic = new Comic();
        comic.setSynopsis("Esta es la sinopsis del comic.");
        assertEquals("Esta es la sinopsis del comic.", comic.getSynopsis());
    }

    @Test
    public void testGetAndSetStock() {
        Comic comic = aComic();
        comic.setStock(100);
        assertEquals(100, comic.getStock());
    }

    private Comic aComic(){
        Comic comic = new Comic();
        return comic;
    }

}
