import { Image } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
    width: 100%;
    height: 122px;
    background-color: ${({ theme }) => theme.colors.background};
    justify-content: flex-end;
    align-items: center;
    
`;

export const Back = styled.TouchableOpacity`
    position: absolute;
    left: 24px;
    bottom: 24px;
`;

export const Icon = styled(Feather)`
    font-size: 24px;
`;

export const Title = styled.Text`
    font-size: 18px;
    margin-bottom: 18px;
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.medium};
`;

export const ImageContent = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: center;
    align-items: flex-end;

    margin-top: 40px;
    margin-bottom: -${(172 /2)}px;
    z-index: 999;
`;

export const PresidentImage = styled(Image).attrs({
    resizeMode: "cover"
})`
    width: 172px;
    height: 172px;
    border-radius: ${({ theme }) => theme.sizes.radius}px;
    
    border-color: ${({ theme }) => theme.colors.background};
    border-width: 5px;
`;

export const ViceImage = styled.Image`
    width: 64px;
    height: 64px;

    border-color: ${({ theme }) => theme.colors.background};
    border-width: 2px;
    border-radius: 14px;

    margin-left: -${(64 /2)}px;
    `;

export const Content = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
    padding-left: 24px;
    padding-right: 24px;


    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
`;

export const Name = styled.Text`
    margin-top: ${(172 /2) + 24}px;
    width: 100%;
    font-size: 22px;
    text-align: center;
    color: ${({ theme }) => theme.colors.title};
    margin-bottom: ${({ theme }) => theme.sizes.spacing}px;
    font-family: ${({ theme }) => theme.fonts.medium};

`;
