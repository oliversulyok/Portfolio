/* eslint-disable react/prop-types */
import React from 'react';
import { Flex } from '@chakra-ui/react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function LandingLayout({ children }) {
  console.log(children);
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: '1200px' }}
      m="0 auto"
    >
      <Header />
      {children}
      <Footer />
    </Flex>
  );
}
