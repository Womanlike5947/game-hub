import { Box, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import useGame from '../hooks/useGame';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <Box padding={5}>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <SimpleGrid columns={{ sm: 2, md: 2, lg: 2, xl: 2 }} pt={10} spacing={20}>
        <Box>
          <Heading size="md" pb={3} color="gray.500">
            Platforms
          </Heading>
          {game.parent_platforms.map((platform) => (
            <Text key={platform.platform.id} pb={1}>
              {platform.platform.name}
            </Text>
          ))}
        </Box>
        <Box>
          <Heading size="md" pb={3} color="gray.500">
            Metascore
          </Heading>
          <Box
            backgroundColor={'green.100'}
            color="green"
            borderRadius={10}
            maxWidth={35}
            textAlign="center"
            fontWeight="bold">
            {game.metacritic}
          </Box>
        </Box>
        <Box>
          <Heading size="md" pb={3} color="gray.500">
            Genre
          </Heading>
          {game.genres.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </Box>
        <Box>
          <Heading size="md" pb={3} color="gray.500">
            Publishers
          </Heading>
          {game.publishers.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default GameDetailPage;
