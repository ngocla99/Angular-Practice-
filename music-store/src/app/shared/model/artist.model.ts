import { Image } from './image.model';

export interface Artist {
  images: Image[];
  name: string;
  popularity: number;
  genres: string[];
  id: string;
}
