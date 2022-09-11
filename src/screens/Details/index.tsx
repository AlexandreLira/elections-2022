import React, { useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native'


import { Info } from '../../components/Info';

import { PresidentProps, PRESIDENTS_DATA } from '../../utils/presidents';

import {
    Back,
    Container,
    Content,
    Header,
    Icon,
    ImageContent,
    Name,
    PresidentImage,
    Title,
    ViceImage
} from './styles';

export function Details() {
    const { params } = useRoute();
    const [presidents, setPresidents] = useState<PresidentProps>({})
    const navigation = useNavigation()

    useEffect(() => {
        const [response] = PRESIDENTS_DATA.filter(item => item.id === params.seletedId)
        setPresidents(response)
    }, [])

    if (!presidents.name) {
        return null
    }


    return (
        <Container>
            <Header>
                <Back onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" />
                </Back>

                <Title>Canditado</Title>
            </Header>

            <ImageContent>
                <PresidentImage source={{ uri: presidents.image }} />
                <ViceImage source={{ uri: presidents.vicePresident.image }} />
            </ImageContent>



            <Content>
                <Name>{presidents.name}</Name>

                <Info title="Número:" text={String(presidents.number)} />
                <Info title="Idade:" text={String(presidents.age) + ' anos'} />
                <Info title="Partido:" text={String(presidents.broken.fullName)} />
                <Info title="Vice:" text={String(presidents.vicePresident.name)} />
                <Info title="Descrição:" text={String(presidents.description)} direction="column" />

            </Content>
        </Container>
    )
} 