import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {Container, Text, Title} from './styles'

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    text: string;
    direction?: 'row' | 'column'
}

export function Info({title, text, direction}: ButtonProps){
    return (
        <Container direction={direction}>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </Container>
    )
}