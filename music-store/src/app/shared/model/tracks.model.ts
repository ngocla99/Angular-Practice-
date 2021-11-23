import { Image } from './image.model';

export interface Track {
  name: string;
  type: string;
  releaseDate: string;
  images: Image[];
  previewUrl?: string;
}
