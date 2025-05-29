import useTrailers from '../hooks/useTrailer';

interface TrailerProps {
  gameId: number;
}

const GameTrailer = ({ gameId }: TrailerProps) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const video480 = data?.results[0];

  return video480 ? (
    <video src={video480.data[480]} poster={video480.preview} controls />
  ) : null;
};

export default GameTrailer;
