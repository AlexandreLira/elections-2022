import { Animated, FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native'
import { PresidentProps } from '../../utils/presidents';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const EmptySpace = styled.View`
    width: ${({ theme: { sizes } }) => (sizes.width - sizes.item_size) / 2}px;
`

export const List = styled(
    Animated.FlatList as new (props: FlatListProps<PresidentProps>) => FlatList<PresidentProps>
).attrs({
    contentContainerStyle: {
        alignItems: 'flex-end'
    },
    horizontal: true,
    showsHorizontalScrollIndicator: false,

})`

`;

export const Footer = styled.View`
width: 100%;
justify-content: center;
align-items: center;
`;
export const FooterContent = styled.View`
    width: ${({ theme }) => theme.sizes.item_size}px;

    margin-left: ${({ theme }) => theme.sizes.spacing}px;
    margin-right: ${({ theme }) => theme.sizes.spacing}px;

    padding: ${({ theme }) => theme.sizes.spacing * 2}px;
`;