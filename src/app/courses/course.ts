import { NumberFormatStyle } from '@angular/common';
import { identifierName } from '@angular/compiler';

export class Course {
  static find(arg0: (courseIterator: Course) => boolean): Course {
    throw new Error('Method not implemented.');
  }

  id: number;
  name: string;
  imageUrl: string;
  price: number;
  code: string;
  duration: number;
  rating: number;
  releaseDate: string;
  description: string;

  constructor(
    id: number,
    name: string,
    imageUrl: string,
    price: number,
    code: string,
    duration: number,
    rating: number,
    releaseDate: string,
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    this.code = code;
    this.duration = duration;
    this.rating = rating;
    this.releaseDate = releaseDate;
    this.description = description;
  }
}
