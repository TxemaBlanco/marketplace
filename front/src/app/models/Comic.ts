import { Genre } from "./Genre";

export class Comic{}
export interface Comic {
isEditing: any;
    isbn: string;
    title: string;
    author: string;
    ishardcover: boolean;
    photo: string;
    price: number;
    synopsis: string;
    stock: number;
    genres: Genre[]; 
    
  }
  