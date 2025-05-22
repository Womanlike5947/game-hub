import { Heading, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';

const GameDetailPage = () => {
  const { id } = useParams();
  const { data, error } = useGame(Number(id));

  if (!data) return null;

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <Heading>{data.name}</Heading>
      <Text>{data.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
