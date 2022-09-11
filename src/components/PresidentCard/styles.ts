import { Animated } from 'react-native';
import styled from 'styled-components/native'


export const Container = styled.View`
    width: ${({ theme }) => theme.sizes.item_size}px;
    
`;

export const Content = styled(Animated.View)`
    background-color: ${({ theme }) => theme.colors.background};

    margin-left: ${({ theme }) => theme.sizes.spacing}px;
    /* margin-top: 50%; */
    margin-right: ${({ theme }) => theme.sizes.spacing}px;

    padding: ${({ theme }) => theme.sizes.spacing * 2}px;
    border-radius: ${({ theme }) => theme.sizes.radius_2}px;

    align-items: center;
`;


export const PresidentImage = styled.Image.attrs({
    resizeMode: 'cover'
})`
    width: 100%;
    height: ${({ theme }) => theme.sizes.item_size}px;
    border-radius: ${({ theme }) => theme.sizes.radius}px;
    margin-bottom: ${({ theme }) => theme.sizes.spacing}px;
`;

export const Name = styled.Text`
    width: 100%;
    font-size: 18px;
    text-align: center;
    color: ${({theme}) => theme.colors.title};
    margin-bottom: ${({ theme }) => theme.sizes.spacing}px;
    font-family: ${({theme}) => theme.fonts.medium};

`;

export const Info = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.sizes.spacing}px;


`;

export const Title = styled.Text`
    font-size: 14px;
    color: ${({theme}) => theme.colors.title};
    font-family: ${({theme}) => theme.fonts.medium};

`;

export const Text = styled.Text`
    font-size: 14px;
    color: ${({theme}) => theme.colors.text};
    font-family: ${({theme}) => theme.fonts.regular};
`;