import styled from 'styled-components/native';

interface ContainerProps {
    direction?: 'row' | 'column'
}

export const Container = styled.View<ContainerProps>`
    width: 100%;
    flex-direction: ${({direction}) => direction ? direction : 'row'};
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.sizes.spacing}px;

`;

export const Title = styled.Text`
    font-size: 16px;
    color: ${({theme}) => theme.colors.title};
    font-family: ${({theme}) => theme.fonts.medium};

`;

export const Text = styled.Text`
    font-size: 16px;
    color: ${({theme}) => theme.colors.text};
    font-family: ${({theme}) => theme.fonts.regular};
`;