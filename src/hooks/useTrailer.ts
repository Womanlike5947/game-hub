import { useQuery } from '@tanstack/react-query';
import { Trailer } from '../entities/Trailer';
import APIClient from '../services/api-client';

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ['trailer', gameId],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};

export default useTrailers;
