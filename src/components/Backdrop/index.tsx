import React from "react";

import { Animated, Image } from "react-native";
import { useTheme } from 'styled-components'
import { LinearGradient } from 'expo-linear-gradient'

import { Container, List } from "./styles";

interface BackdropProps {
    data: any;
    scrollX: any;
}

export function Backdrop({ data, scrollX }: BackdropProps) {

    const { sizes } = useTheme()
    return (
        <Container>
            <List
                data={data}
                keyExtractor={(item) => item.id + '-backdrop'}
                removeClippedSubviews={false}
                contentContainerStyle={{
                    width: sizes.width,
                    height: sizes.height * 0.65,
                }}
                renderItem={({ item, index }) => {
                    if (!item.image) {
                        return null
                    }

                    const inputRange = [
                        (index - 2) * sizes.item_size,
                        (index - 1) * sizes.item_size,
                    ]

                    const translateX = scrollX.interpolate({
                        inputRange: inputRange,
                        outputRange: [0, sizes.width],
                        // extrapolate:'clamp'
                    });

                    return (
                        <Animated.View
                            removeClippedSubviews={false}
                            style={{
                                position: 'absolute',
                                width: translateX,
                                height: sizes.height,
                                overflow: 'hidden',
                            }}
                        >
                            <Image
                                source={{ uri: item.broken.image }}
                                style={{
                                    width: sizes.width,
                                    height: sizes.height * 0.65,
                                    position: "absolute",
                                    resizeMode: 'cover',
                                }}
                            />
                        </Animated.View>
                    )
                }}
            />
            <LinearGradient
                colors={['rgba(0,0,0,0.0)', 'white']}
                style={{
                    width: sizes.width,
                    height: sizes.height * 0.65,
                    position: 'absolute',
                    bottom: 0,
                    
                }}
            />
        </Container>
    )
}