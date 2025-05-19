import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import APIClient from '../services/api-client';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>('genre');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // This is 24hrs
    initialData: genres,
  });

export default useGenres;
