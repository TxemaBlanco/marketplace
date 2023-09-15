/* genres */
INSERT INTO genres (name) VALUES ("Infantil");
INSERT INTO genres (name) VALUES ("Juvenil");
INSERT INTO genres (name) VALUES ("Manga");
INSERT INTO genres (name) VALUES ("Novela Gráfica");
INSERT INTO genres (name) VALUES ("Humor");
INSERT INTO genres (name) VALUES ("Superhéroes");

/* comics */
INSERT INTO comics (isbn, title, author, price, ishardcover, synopsis, photo, stock) VALUES ("1000000000000","La tormenta","Luis Torrebruno",17.9,true,"defatult_comic.jpg","fkod",20);
INSERT INTO comics (isbn, title, author, price, ishardcover, synopsis, photo, stock) VALUES ("0000000000000","La tormenta","Luis Torrebruno",17.9,true,"María Teresa Montilla (Natalia Streignard) es una mujer acostumbrada a vivir en la ciudad, pero ella tiene que mudarse a vivir a la hacienda «La Tormenta», propiedad de su familia en los llanos orientales, para tratar de salvar a su familia de la ruina financiera.","default_comic.jpg",20);
INSERT INTO comics (isbn, title, author, price, ishardcover, synopsis, photo, stock) VALUES ("0000000000001","pokemon","jaimito",17.9,true,"Un impetuoso y joven entrenador llamado Ash Ketchum, y de Pikachu, su compañero Pokémon, mientras viajan por el mundo Pokémon visitando destinos exóticos, conociendo a montones de personas y Pokémon nuevos e interesantes, y viviendo muchas y emocionantes aventuras.","default_comic.jpg",5);
INSERT INTO comics (isbn, title, author, price, ishardcover, synopsis, photo, stock) VALUES ("2222222222222","Terminator","Gonzalo Bermeo",17.9,true,"María Teresa Montilla (Natalia Streignard) es una mujer acostumbrada a vivir en la ciudad, pero ella tiene que mudarse a vivir a la hacienda «La Tormenta», propiedad de su familia en los llanos orientales, para tratar de salvar a su familia de la ruina financiera.","default_comic.jpg",4);
INSERT INTO comics (isbn, title, author, price, ishardcover, synopsis, photo, stock) VALUES ("3333333333333","El Increible Hulk Vol2 #195","Juan San Valero",17.9,true,"María Teresa Montilla (Natalia Streignard) es una mujer acostumbrada a vivir en la ciudad, pero ella tiene que mudarse a vivir a la hacienda «La Tormenta», propiedad de su familia en los llanos orientales, para tratar de salvar a su familia de la ruina financiera.","default_comic.jpg",6);
INSERT INTO comics (isbn, title, author, price, ishardcover, synopsis, photo, stock) VALUES ("4444444444444","Mortadelo Gigante #1","Luis Torrebruno",17.9,true,"Pero hombre Mortadelo, !Yo creo que tendria que haber buscado otro sistema para llegar al agua…!","default_comic.jpg",40);
INSERT INTO comics (isbn, title, author, price, ishardcover, synopsis, photo, stock) VALUES ("5555555555555","Mortadelo Gigante #2","LuTor",17.9,true,"jMaría Teresa Montilla (Natalia Streignard) es una mujer acostumbrada a vivir en la ciudad, pero ella tiene que mudarse a vivir a la hacienda «La Tormenta», propiedad de su familia en los llanos orientales, para tratar de salvar a su familia de la ruina financiera.","default_comic.jpg",12);
INSERT INTO comics (isbn, title, author, price, ishardcover, synopsis, photo, stock) VALUES ("0000230000000","Universitarias #01","bruno",17.9,true,"cuatro compañeras de habitación y estudiantes de la prestigiosa universidad New England Essex. Kimberly es la mejor estudiante de instituto de un humilde suburbio de Arizona. Ella puede ser cariñosa, ambiciosa y estar preparada para lo que la universidad le depara académicamente, pero allí se dará cuenta de que realmente no está preparada para lo que el New England Essex le tiene reservado socialmente hablando. ","default_comic.jpg",20);
INSERT INTO comics (isbn, title, author, price, ishardcover, synopsis, photo, stock) VALUES ("6666666666666","Universitarias #02","Luis Torrebruno",17.9,true,"cuatro compañeras de habitación y estudiantes de la prestigiosa universidad New England Essex. Kimberly es la mejor estudiante de instituto de un humilde suburbio de Arizona. Ella puede ser cariñosa, ambiciosa y estar preparada para lo que la universidad le depara académicamente, pero allí se dará cuenta de que realmente no está preparada para lo que el New England Essex le tiene reservado socialmente hablando. ","default_comic.jpg",20);
INSERT INTO comics (isbn, title, author, price, ishardcover, synopsis, photo, stock) VALUES ("0001200000000","Los Micronautas Vol1 #01","pepe",17.9,true,"María Teresa Montilla (Natalia Streignard) es una mujer acostumbrada a vivir en la ciudad, pero ella tiene que mudarse a vivir a la hacienda «La Tormenta», propiedad de su familia en los llanos orientales, para tratar de salvar a su familia de la ruina financiera.","default_comic.jpg",20);
INSERT INTO comics (isbn, title, author, price, ishardcover, synopsis, photo, stock) VALUES ("0000002030000","X-Men - The 198 #01","Luis Torrebruno",17.9,true,"María Teresa Montilla (Natalia Streignard) es una mujer acostumbrada a vivir en la ciudad, pero ella tiene que mudarse a vivir a la hacienda «La Tormenta», propiedad de su familia en los llanos orientales, para tratar de salvar a su familia de la ruina financiera.","default_comic.jpg",20);
INSERT INTO comics (isbn, title, author, price, ishardcover, synopsis, photo, stock) VALUES ("0000005600000","pipo","Lalo",17.9,true,"María Teresa Montilla (Natalia Streignard) es una mujer acostumbrada a vivir en la ciudad, pero ella tiene que mudarse a vivir a la hacienda «La Tormenta», propiedad de su familia en los llanos orientales, para tratar de salvar a su familia de la ruina financiera.","default_comic.jpg",20);
INSERT INTO comics (isbn, title, author, price, ishardcover, synopsis, photo, stock) VALUES ("0000004300000","lilo y stich","Luisa",17.9,true,"María Teresa Montilla (Natalia Streignard) es una mujer acostumbrada a vivir en la ciudad, pero ella tiene que mudarse a vivir a la hacienda «La Tormenta», propiedad de su familia en los llanos orientales, para tratar de salvar a su familia de la ruina financiera.","default_comic.jpg",20);

INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("1000000000000", 1);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("1000000000000", 6);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("0000000000001", 2);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("2222222222222", 5);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("3333333333333", 6);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("3333333333333", 1);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("3333333333333", 3);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("0000000000000", 1);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("0000000000000", 3);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("0000000000000", 5);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("0000004300000", 2);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("0000004300000", 3);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("0000004300000", 5);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("0000005600000", 2);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("0000005600000", 4);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("4444444444444", 1);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("4444444444444", 5);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("6666666666666", 4);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("6666666666666", 2);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("6666666666666", 1);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("0000002030000", 2);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("0000002030000", 1);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("0001200000000", 2);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("0001200000000", 1); 


/* customers */
INSERT INTO customers (email, dni, name, surname, surname2, province, town, postalcode, street, number, stair,floor, gate, letter, password) VALUES ("user@user.com","29920371A","Lola","Flores","Rosas","Madrid","Madrid",30033,"La buenecita",14,"dcha","3","3","A","$2a$12$BwyEzyYm8ssMjYY9HLvrq.LwIxYbfApeAM41kyP7o6ZyYq8B542wO");
INSERT INTO customers (email, dni, name, surname, surname2, province, town, postalcode, street, number, stair,floor, gate, letter, password) VALUES ("lola@gmail.com","29920371A","Lola","Flores","Rosas","Madrid","Madrid",30033,"La buenecita",14,"dcha","3","3","A","$2a$12$BwyEzyYm8ssMjYY9HLvrq.LwIxYbfApeAM41kyP7o6ZyYq8B542wO");
INSERT INTO customers (email, dni, name, surname, surname2, province, town, postalcode, street, number, stair,floor, gate, letter, password) VALUES ("federico@gmail.com","33666371A","Federico","Sanchez","La Tierra","Barcelona","Barcelona",30033,"Avnda Tungsteno",14,"dcha","2","8","J","$2a$12$BwyEzyYm8ssMjYY9HLvrq.LwIxYbfApeAM41kyP7o6ZyYq8B542wO");
INSERT INTO customers (email, dni, name, surname, surname2, province, town, postalcode, street, number, stair,floor, gate, letter, password) VALUES ("lala@gmail.com","29920371A","Lala","cruz","santos","Madrid","Madrid",30033,"La buenecita",14,"dcha","3","3","A","$2a$12$BwyEzyYm8ssMjYY9HLvrq.LwIxYbfApeAM41kyP7o6ZyYq8B542wO");
INSERT INTO customers (email, dni, name, surname, surname2, province, town, postalcode, street, number, stair,floor, gate, letter, password) VALUES ("jaime@gmail.com","29920371A","jaime","sanchez","sanchez","malaga","malaga",30033,"El Coronel La Piara",14,"dcha","3","3","A","$2a$12$BwyEzyYm8ssMjYY9HLvrq.LwIxYbfApeAM41kyP7o6ZyYq8B542wO");
INSERT INTO customers (email, dni, name, surname, surname2, province, town, postalcode, street, number, stair,floor, gate, letter, password) VALUES ("Bartolomeo@gmail.com","29920371A","Bartolomeo","Gutierrez","Queleveo","malaga","malaga",30033,"c/La Princesa Cisne",14,"izda","98","5","H","$2a$12$BwyEzyYm8ssMjYY9HLvrq.LwIxYbfApeAM41kyP7o6ZyYq8B542wO");
/* orders */
INSERT INTO orders (customer_email,comic_isbn, date) VALUES ("user@user.com",'1000000000000',"2023/08/23");
INSERT INTO orders (customer_email,comic_isbn, date) VALUES ("user@user.com",'0000000000001',"2023/08/12");
INSERT INTO orders (customer_email,comic_isbn, date) VALUES ("user@user.com",'0000000000001',"2023/08/12");
INSERT INTO orders (customer_email,comic_isbn, date) VALUES ("user@user.com",'2222222222222',"2023/08/12");
INSERT INTO orders (customer_email,comic_isbn, date) VALUES ("Bartolomeo@gmail.com",'0000002030000',"2023/08/20");
INSERT INTO orders (customer_email,comic_isbn, date) VALUES ("Bartolomeo@gmail.com",'6666666666666',"2023/08/20");
INSERT INTO orders (customer_email,comic_isbn, date) VALUES ("Bartolomeo@gmail.com",'6666666666666',"2023/08/20");
INSERT INTO orders (customer_email,comic_isbn, date) VALUES ("federico@gmail.com", '0000004300000',"2023/08/21");
INSERT INTO orders (customer_email,comic_isbn, date) VALUES ("user@user.com",'4444444444444',"2023/08/21");
INSERT INTO orders (customer_email,comic_isbn, date) VALUES ("lola@gmail.com",'4444444444444',"2023/08/22");
INSERT INTO orders (customer_email,comic_isbn, date) VALUES ("user@user.com",'0000004300000',"2023/08/22");
INSERT INTO orders (customer_email,comic_isbn, date) VALUES ("user@user.com",'0000000000001',"2023/08/23");
INSERT INTO orders (customer_email,comic_isbn, date) VALUES ("user@user.com",'3333333333333',"2023/08/23");
INSERT INTO orders (customer_email,comic_isbn, date) VALUES ("user@user.com",'3333333333333',"2023/08/24");

-- INSERT INTO orders (comic_isbn, date) VALUES ('0000000000001',"2023/08/12");
-- INSERT INTO orders (comic_isbn, date) VALUES ('0000000000001',"2023/08/12");
-- INSERT INTO orders (comic_isbn, date) VALUES ('2222222222222',"2023/08/12");
-- INSERT INTO orders (comic_isbn, date) VALUES ('0000002030000',"2023/08/20");
-- INSERT INTO orders (comic_isbn, date) VALUES ('6666666666666',"2023/08/20");
-- INSERT INTO orders (comic_isbn, date) VALUES ('6666666666666',"2023/08/20");
-- INSERT INTO orders (comic_isbn, date) VALUES ('0000004300000',"2023/08/21");
-- INSERT INTO orders (comic_isbn, date) VALUES ('4444444444444',"2023/08/21");
-- INSERT INTO orders (comic_isbn, date) VALUES ('4444444444444',"2023/08/22");
-- INSERT INTO orders (comic_isbn, date) VALUES ('0000004300000',"2023/08/22");
-- INSERT INTO orders (comic_isbn, date) VALUES ('0000000000001',"2023/08/23");
-- INSERT INTO orders (comic_isbn, date) VALUES ('3333333333333',"2023/08/23");
-- INSERT INTO orders (comic_isbn, date) VALUES ('3333333333333',"2023/08/24");
/* customer_order */
-- INSERT INTO customer_order (customer_email, order_id) VALUES ("user@user.com", 1);
-- INSERT INTO customer_order (customer_email, order_id) VALUES ("user@user.com", 2);
-- INSERT INTO customer_order (customer_email, order_id) VALUES ("user@user.com", 3);
-- INSERT INTO customer_order (customer_email, order_id) VALUES ("user@user.com", 4);
-- INSERT INTO customer_order (customer_email, order_id) VALUES ("user@user.com", 5);
-- INSERT INTO customer_order (customer_email, order_id) VALUES ("user@user.com", 6);
-- INSERT INTO customer_order (customer_email, order_id) VALUES ("user@user.com", 7);
-- INSERT INTO customer_order (customer_email, order_id) VALUES ("Bartolomeo@gmail.com", 8);
-- INSERT INTO customer_order (customer_email, order_id) VALUES ("Bartolomeo@gmail.com", 9);
-- INSERT INTO customer_order (customer_email, order_id) VALUES ("Bartolomeo@gmail.com", 10);
-- INSERT INTO customer_order (customer_email, order_id) VALUES ("lola@gmail.com", 11);
-- INSERT INTO customer_order (customer_email, order_id) VALUES ("federico@gmail.com", 12);
-- INSERT INTO customer_order (customer_email, order_id) VALUES ("federico@gmail.com", 13);
-- INSERT INTO customer_order (customer_email, order_id) VALUES ("user@user.com", 14);



