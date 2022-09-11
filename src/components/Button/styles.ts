import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    background-color: ${({theme}) => theme.colors.primary};

    border-radius: ${({theme}) => theme.sizes.spacing}px;

    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: 16px;
`;