/* genres */
INSERT INTO genres (name) VALUES ("Infantil")
INSERT INTO genres (name) VALUES ("Juvenil")
INSERT INTO genres (name) VALUES ("Manga")
INSERT INTO genres (name) VALUES ("Novela Gráfica")
INSERT INTO genres (name) VALUES ("Humor")
INSERT INTO genres (name) VALUES ("Superhéroes")

/* comics */
INSERT INTO comics (isbn, title, author, price, ishardcover, synopsis, photo, stock) VALUES ("IJJJ","La tormenta","Luis Torrebruno",17.9,true,"jdiojdf joifjd","fkod",20)

INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("IJJJ", 1)
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("IJJJ", 6)

/* customers */
INSERT INTO customers (email, dni, name, surname, surname2, province, town, postalcode, street, number, stair,floor, gate, letter, password) VALUES ("user@user.com","29920371A","Lola","Flores","Rosas","Madrid","Madrid",30033,"La buenecita",14,"dcha","3","3","A","$2a$12$BwyEzyYm8ssMjYY9HLvrq.LwIxYbfApeAM41kyP7o6ZyYq8B542wO")
/* orders */
INSERT INTO orders (email, isbn, date1) VALUES ("user@user.com", "IJJJ", "2019-01-01")




