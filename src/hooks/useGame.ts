import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient from '../services/api-client';

export interface Game {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  rating: number;
}

const apiClient = new APIClient<Game>('/games');

const useGame = (gameId: number) => {
  return useQuery<Game, Error>({
    queryKey: ['games', gameId],
    queryFn: () => apiClient.get(gameId),
    staleTime: ms('24h'),
  });
};

export default useGame;
