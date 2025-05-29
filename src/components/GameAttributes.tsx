import { SimpleGrid, Text } from '@chakra-ui/react';
import { Genre } from '../entities/Genre';
import { Platform } from '../entities/Platform';
import { Publisher } from '../entities/Publishers';
import CriticScore from './CriticScore';
import DefinitionItem from './DefinitionItem';

interface GameAttributesProps {
  parentPlatforms?: { platform: Platform }[];
  genres: Genre[];
  metaCritic?: number;
  publishers?: Publisher[];
}

const GameAttributes = ({
  parentPlatforms,
  genres,
  metaCritic,
  publishers,
}: GameAttributesProps) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem heading="Platforms">
        {parentPlatforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem heading="Metacritic">
        <CriticScore score={metaCritic || 0} />
      </DefinitionItem>
      <DefinitionItem heading="Genres">
        {genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem heading="Publishers">
        {publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
