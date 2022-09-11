import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';
import { PresidentProps } from '../../utils/presidents';

export const Container = styled.View`
    width: ${({theme}) => theme.sizes.width}px;
    height: ${({theme}) => theme.sizes.height * 0.65}px;
    position: absolute;
`;
export const List = styled(
    FlatList as new (props: FlatListProps<PresidentProps>) => FlatList<PresidentProps>
)`

`;