/* genres */
INSERT INTO genres (name) VALUES ("Infantil");/*1*/
INSERT INTO genres (name) VALUES ("Juvenil");/*2*/
INSERT INTO genres (name) VALUES ("Manga");/*3*/
INSERT INTO genres (name) VALUES ("Novela Gráfica");/*4*/
INSERT INTO genres (name) VALUES ("Humor");/*5*/
INSERT INTO genres (name) VALUES ("Superhéroes");/*6*/

/* comics mmmm */

INSERT INTO comics (isbn, title, author, price, ishardcover, synopsis, photo, stock) VALUES ("9788491466871","American gods sombras","Neil Gaiman y P. Craig Russell",2.37,false,"Sombra Moon acaba de salir de la cárcel y se entera de que su mujer ha muerto. Derrotado, en la ruina y sin saber adónde ir, conoce al misterioso señor Wednesday, que le da trabajo como guardaespaldas y le hace entrar en el mundo letal de lo sobrenatural, donde los fantasmas del pasado vuelven de entre los muertos y la guerra entre los viejos y los nuevos dioses está a punto de estallar. *Adaptación gráfica de la novela del multipremiado autor Neil Gaiman (The Sandman, Coraline, La última tentación, Cómo hablar con chicas en fiestas). *Portada de Dave McKean (ilustrador de The Sandman). *Obra multigalardonada por los Premios Hugo, Nébula, Bram Stroker o Locus. *Primer arco de 9 grapas. En total serán tres arcos argumentales. *Reciente adaptación a serie de TV.","AnericanGodsSombras.jpg",1);



/*Genres-comics*/


INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("9788491466871", 3);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("9788491466871", 4);















INSERT INTO comics (isbn, title, author, price, ishardcover, synopsis, photo, stock) VALUES ("9788402421432","Mortadelo y Filemón Drones Matones","Francisco Ibañez ",5,60,false,"En esta nueva aventura, Mortadelo y Filemón incorporan las nuevas tecnologías a las misiones de la T.I.A. En esta historieta, el profesor Bacterio ha construido un dron ideado especialmente para ayudar a Mortadelo y Filemón en sus misiones y también para neutralizar drones del enemigo, pero la situación empeorará por momentos, ya que todo invento de Bacterio no puede acabar bien. La T.I.A. intentará hacer una demostración al presidente de los Estados Juntitos, que acabará en drama, seguro. ","mortadeloDrones.jpg",1);

/* customers */
INSERT INTO customers (email, dni, name, surname, surname2, province, town, postalcode, street, number, stair,floor, gate, letter, password) VALUES ("user@user.com","29920371A","Lola","Flores","Rosas","Madrid","Madrid",30033,"La buenecita",14,"dcha","3","3","A","$2a$12$BwyEzyYm8ssMjYY9HLvrq.LwIxYbfApeAM41kyP7o6ZyYq8B542wO");
INSERT INTO customers (email, dni, name, surname, surname2, province, town, postalcode, street, number, stair,floor, gate, letter, password) VALUES ("lola@gmail.com","29920371A","Lola","Flores","Rosas","Madrid","Madrid",30033,"La buenecita",14,"dcha","3","3","A","$2a$12$BwyEzyYm8ssMjYY9HLvrq.LwIxYbfApeAM41kyP7o6ZyYq8B542wO");
INSERT INTO customers (email, dni, name, surname, surname2, province, town, postalcode, street, number, stair,floor, gate, letter, password) VALUES ("federico@gmail.com","33666371A","Federico","Sanchez","La Tierra","Barcelona","Barcelona",30033,"Avnda Tungsteno",14,"dcha","2","8","J","$2a$12$BwyEzyYm8ssMjYY9HLvrq.LwIxYbfApeAM41kyP7o6ZyYq8B542wO");
INSERT INTO customers (email, dni, name, surname, surname2, province, town, postalcode, street, number, stair,floor, gate, letter, password) VALUES ("lala@gmail.com","29920371A","Lala","cruz","santos","Madrid","Madrid",30033,"La buenecita",14,"dcha","3","3","A","$2a$12$BwyEzyYm8ssMjYY9HLvrq.LwIxYbfApeAM41kyP7o6ZyYq8B542wO");
INSERT INTO customers (email, dni, name, surname, surname2, province, town, postalcode, street, number, stair,floor, gate, letter, password) VALUES ("jaime@gmail.com","29920371A","jaime","sanchez","sanchez","malaga","malaga",30033,"El Coronel La Piara",14,"dcha","3","3","A","$2a$12$BwyEzyYm8ssMjYY9HLvrq.LwIxYbfApeAM41kyP7o6ZyYq8B542wO");
INSERT INTO customers (email, dni, name, surname, surname2, province, town, postalcode, street, number, stair,floor, gate, letter, password) VALUES ("Bartolomeo@gmail.com","29920371A","Bartolomeo","Gutierrez","Queleveo","malaga","malaga",30033,"c/La Princesa Cisne",14,"izda","98","5","H","$2a$12$BwyEzyYm8ssMjYY9HLvrq.LwIxYbfApeAM41kyP7o6ZyYq8B542wO");
/* orders */
INSERT INTO orders (customer_email,comic_isbn, date) VALUES ("user@user.com",'9788491466871',"2023/08/23");
INSERT INTO orders (customer_email,comic_isbn, date) VALUES ("Bartolomeo@gmail.com",'9788491466871',"2023/08/20");
INSERT INTO orders (customer_email,comic_isbn, date) VALUES ("federico@gmail.com", '9788491466871',"2023/08/21");















INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("9788402421432", 2);
INSERT INTO comics_genres (comic_isbn, genre_id) VALUES ("9788402421432", 5);
INSERT INTO orders (comic_isbn, date) VALUES ('9788402421432',"2015/0/15");


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



