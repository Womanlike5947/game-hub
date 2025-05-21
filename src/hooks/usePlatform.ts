import usePlatforms from './usePlatforms';

const usePlatform = (id?: number) => {
  const { data: platforms } = usePlatforms();

  // console.log(
  //   'usePlatform',
  //   platforms?.results.find((p) => p.id === id)
  // );
  return platforms?.results.find((p) => p.id === id);
};

export default usePlatform;
