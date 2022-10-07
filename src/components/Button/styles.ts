import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


interface TypeProps{
    type: 'update' | 'delete' | 'save' | 'cancel'
}

export const Container = styled.TouchableOpacity<TypeProps>`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    border-radius: ${RFValue(8)}px;;
    margin: ${RFValue(10)}px;
    height: ${RFValue(50)}px;;
    width: ${RFValue(120)}px;
    ${({ type }) => type === 'update' && css`background-color: #3333ff;`};
    ${({ type }) => type === 'delete' && css`background-color: #ff0000;`};
    ${({ type }) => type === 'save' && css`background-color: #04AA6D`};
    ${({ type }) => type === 'cancel' && css`background-color: #ff0000;`};

    
`;

export const Icon = styled(FontAwesomeIcon)`
    color: #FFFFFF;
`;

export const TextButton = styled.Text`
    color: #FFFFFF;
    margin-left: ${RFValue(10)}px;
`;