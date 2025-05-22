import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { Games } from '../hooks/useGames';
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import PlatformIconList from './PlatformIconList';

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic ?? 0} />
        </HStack>
        <Heading fontSize="2xl">
          <NavLink to={`/games/${game.id}`}>{game.name}</NavLink>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
