import React, { useEffect, useRef, useState } from "react";
import { Animated } from 'react-native'
import { useTheme } from 'styled-components'
import { Backdrop } from "../../components/Backdrop";
import { Button } from "../../components/Button";
import { PresidentCard } from "../../components/PresidentCard";

import { PRESIDENTS_DATA } from "../../utils/presidents";

import { Container, EmptySpace, Footer, FooterContent, List } from "./styles";

export function Home() {

    const [presidents, setPresidents] = useState<any>([])

    const scrollX = useRef(new Animated.Value(0)).current;
    console.log(scrollX)
    const { sizes } = useTheme() 

    useEffect(() => {
        setPresidents([
            { id: 'left-spacer' },
            ...PRESIDENTS_DATA,
            { id: 'right-spacer' }
        ])
    }, [])

    return (
        <Container>
            <Backdrop
                data={presidents}
                scrollX={scrollX}
            />
            <List
                data={presidents}
                keyExtractor={item => item.id}
                bounces={false}
                decelerationRate="fast"
                snapToInterval={sizes.item_size}
                snapToAlignment="start"
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                  )}
                renderItem={({ item, index }) => {
                    if(!item.name){
                        return <EmptySpace key={item.id}/>
                    }

                    const inputRange = [
                        (index - 2) * sizes.item_size,
                        (index - 1) * sizes.item_size,
                        index * sizes.item_size,
                    ]

                    const translateY =  scrollX.interpolate({
                        inputRange,
                        outputRange: [0, -50, 0]
                    })

                    return (
                        <PresidentCard 
                            data={item}
                            key={item.id}
                            translateY={translateY}
                        />
                    )
                }}
            />
            <Footer>
                <FooterContent>
                    <Button
                        title="Ver canditado"
                    />
                </FooterContent>
            </Footer>
        </Container>

    )
}
