import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


interface TypeProps{
    type: 'view' | 'update' | 'delete'
}

export const Container = styled.TouchableOpacity<TypeProps>`
    justify-content: center;
    align-items: center;
    border-radius: ${RFValue(50)}px;;
    margin: ${RFValue(10)}px;
    height: ${RFValue(30)}px;;
    width: ${RFValue(30)}px;
    ${({ type }) => type === 'view' && css`background-color: #04AA6D`};
    ${({ type }) => type === 'update' && css`background-color: #3333ff;`};
    ${({ type }) => type === 'delete' && css`background-color: #ff0000;`};
    
`;

export const Icon = styled(FontAwesomeIcon)`
    color: #FFFFFF;
`;