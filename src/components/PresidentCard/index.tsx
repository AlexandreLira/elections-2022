import React from "react";
import { PresidentProps } from "../../utils/presidents";
import {
    Container,
    Content,
    Info,
    Name,
    PresidentImage,
    Text,
    Title
} from "./styles";

interface PresidentCardProps {
    data: PresidentProps
    translateY?: any
}

export function PresidentCard({ data, translateY }: PresidentCardProps) {
    const {
        broken,
        image,
        vicePresident,
        age,
        number
    } = data
    
    return (
        <Container>
            <Content style={{ transform: [{ translateY }] }}>
                <PresidentImage
                    source={{ uri: data.image }}
                />

                <Name>{data.name}</Name>

                <Info>
                    <Title>Número:</Title>
                    <Text>{number}</Text>
                </Info>
                <Info>
                    <Title>Partido:</Title>
                    <Text>{broken.sortName ? broken.sortName : broken.fullName}</Text>
                </Info>
                <Info>
                    <Title>Vice:</Title>
                    <Text>{vicePresident?.name}</Text>
                </Info>
                
            </Content>
        </Container>
    )
}