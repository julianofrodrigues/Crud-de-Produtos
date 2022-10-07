import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


export const Container = styled.TouchableOpacity`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    border-radius: ${RFValue(8)}px;;
    margin: ${RFValue(10)}px;
    height: ${RFValue(50)}px;;
    width: ${RFValue(120)}px;
  
`;

export const Icon = styled(FontAwesomeIcon)`
    color: #FFFFFF;
`;

export const TextButton = styled.Text`
    color: #FFFFFF;
    margin-left: ${RFValue(5)}px;
    font-size: ${RFValue(20)}px;
`;

