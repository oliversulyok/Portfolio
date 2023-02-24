import React,{useState, useRef} from "react";
import { ImageDrawer } from "./Components/";
import { Box, ChakraProvider, Flex, extendTheme, Text, Grid, GridItem } from '@chakra-ui/react'

const theme = extendTheme({
    // https://chakra-ui.com/docs/styled-system/customize-theme
    colors: {
        brand: {
            100: "#000000",
        }
    }
})


const App = () => {
    const renderCounter  = useRef(0);
    const pageCounter = useRef(0);
    const pages = ['Home','About me', 'Projects', 'Contact'];
    const[visiblePage,setVisiblePage] = useState(pages[0]);
    const handlePageChange = (key) => {
        if (visiblePage != key){
            setVisiblePage(key)
            pageCounter.current = pageCounter.current + 1;
        }
    };
    renderCounter.current = renderCounter.current + 1;
    // Not sure if pages.map is optimal https://stackoverflow.com/questions/36677733/why-shouldnt-jsx-props-use-arrow-functions-or-bind
    return (
    <ChakraProvider>
    <Grid   templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
            gridTemplateRows={'50px 1fr 30px'}
            gridTemplateColumns={'150px 1fr'}
            h='200px'
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'
            >
        <GridItem pl='2' bg='orange.300' area={'header'}>
        {pages.map((page, idx) => (
                <Box as='button' borderRadius='md' color='white' bg='black' key={idx} 
                onClick={() => handlePageChange(page)}>{page}</Box>
            ))}
        </GridItem> 
    <Flex>
        <Text>{visiblePage}</Text>
        <ImageDrawer></ImageDrawer>
        {renderCounter.current}
    </Flex>
    </Grid>
    </ChakraProvider>
    );
}

export default App;
