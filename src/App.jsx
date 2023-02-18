import React,{useState} from "react";
import { Box, ChakraProvider, Flex, Spacer, extendTheme, Text } from '@chakra-ui/react'

const theme = extendTheme({
    // https://chakra-ui.com/docs/styled-system/customize-theme
    colors: {
        brand: {
            100: "#000000",
        }
    }
})

const App = () => {
    const pages = ['Home','About me', 'Projects', 'Contact'];
    const[visiblePage,setVisiblePage] = useState(pages[0]);
    const handlePageChange = (key) => {
        setVisiblePage(key)
    };
    
    return (
    <ChakraProvider>
    <Flex>
        {pages.map((page, idx) => (
            <Box as='button' borderRadius='md' color='white' bg='black' key={idx} onClick={() => handlePageChange(page)}>{page}</Box>
        ) )}
    </Flex>
    <Flex>
        <Text>{visiblePage}</Text>
    </Flex>
    
    </ChakraProvider>
    );
}

export default App;
