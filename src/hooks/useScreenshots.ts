import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { Screenshot } from '../entities/Screenshots';
import APIClient from '../services/api-client';

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
  });
};

export default useScreenshots;
