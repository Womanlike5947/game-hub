import Genre from './Genre';
import Platform from './Platform';
import Publisher from './Publishers';

export default interface Game {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  genres: Genre[];
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating: number;
  rating_top: number;
  publishers: Publisher[];
}
