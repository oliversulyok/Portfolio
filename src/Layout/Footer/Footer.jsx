/* eslint-disable react/prop-types */
import React from 'react';
import { Textarea, Text } from '@chakra-ui/react';

export default function Footer({ refreshCnt }) {
  return (
    <div>
      <Textarea placeholder="template" />
      <Text>{refreshCnt}</Text>
    </div>
  );
}
