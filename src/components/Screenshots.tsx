import { Image, SimpleGrid, Spinner } from '@chakra-ui/react';
import useScreenshots from '../hooks/useScreenshots';

interface ScreenshotsProps {
  gameId: number;
}

const Screenshots = ({ gameId }: ScreenshotsProps) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  const screenshotImages = data?.results ?? [];

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
      {screenshotImages.map((screenshot) => (
        <Image
          key={screenshot.id}
          src={screenshot.image}
          objectFit="cover"
          borderRadius="md"
        />
      ))}
    </SimpleGrid>
  );
};

export default Screenshots;
