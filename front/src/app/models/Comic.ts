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
  export interface CreateComicDTO extends Omit<Comic,'id'| 'genres'>{
    genresId:number;
  
  }
  export interface UpdateComicDTO extends Partial <CreateComicDTO>{

  }
  