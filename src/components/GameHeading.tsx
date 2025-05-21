import { Heading } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
// import useGenres from '../hooks/useGenres';
import usePlatform from '../hooks/usePlatform';

interface Props {
  // gameQuery: GameQuery;
  platformId?: number;
  genreId?: number;
}

const GameHeading = ({ platformId, genreId }: Props) => {
  // const { data: genres } = useGenres();

  const platform = usePlatform(platformId);

  const genre = useGenre(genreId);

  // TODO - come back and make these functions one generic function
  // const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
