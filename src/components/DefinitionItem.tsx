import { Box, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface DefinitionItemProps {
  heading: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ heading, children }: DefinitionItemProps) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {heading}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
