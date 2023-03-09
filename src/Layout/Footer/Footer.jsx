import React from 'react';
import { Textarea, Text } from '@chakra-ui/react'

export const Footer = (props) => {

    return(
        <div>
        <Textarea placeholder="template"></Textarea>
        <Text>{props.refreshCnt}</Text>
        </div>
    )
}