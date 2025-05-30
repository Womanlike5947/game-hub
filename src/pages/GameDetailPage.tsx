import { Box, Heading, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameTrailer from '../components/GameTrailer';
import Screenshots from '../components/Screenshots';
import useGame from '../hooks/useGame';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <Box padding={5}>
      <GameTrailer gameId={game.id} />
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes
        parentPlatforms={game.parent_platforms}
        metaCritic={game.metacritic}
        genres={game.genres}
        publishers={game.publishers}
      />
      <Screenshots gameId={game.id} />
    </Box>
  );
};

export default GameDetailPage;
