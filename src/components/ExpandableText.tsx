import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface ExpandableTextProps {
  children: string;
}

const ExpandableText = ({ children }: ExpandableTextProps) => {
  const [expanded, setExpanded] = useState(false);

  console.log('expanded? ', expanded);

  const characterLimit = 300;

  if (!children) return null;

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleMinimize = () => {
    setExpanded(false);
  };
  if (children.length <= characterLimit) {
    return <Text>{children}</Text>;
  }

  const summary = expanded
    ? children
    : children.substring(0, characterLimit) + '...';

  return (
    <Text>
      {summary}
      <Button
        onClick={expanded ? handleMinimize : handleExpand}
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        ml={2}>
        {expanded ? 'Show Less' : 'Show More'}
      </Button>
    </Text>
  );
};

export default ExpandableText;
