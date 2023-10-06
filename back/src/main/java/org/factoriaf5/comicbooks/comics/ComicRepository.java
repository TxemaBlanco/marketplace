package org.factoriaf5.comicbooks.comics;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComicRepository extends JpaRepository<Comic,String>{
    Optional<Comic> findByIsbn(String isbn);
}
