import { Customer } from "./Customer.model";
import { Comic } from "./Comic";

export interface Order {
  id: number;
  date: string;
  name: string;
  comic_isbn: Comic["isbn"];
  customer_email: Customer["email"];
  comic: Comic;
}