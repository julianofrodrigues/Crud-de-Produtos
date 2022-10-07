import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: ${RFValue(17)}px ${RFValue(24)}px;
    margin-bottom: 16px;
    width: 100%;
    justify-content: center;
    align-items: center;
   
`;

export const Name = styled.Text`
    font-size: ${RFValue(16)}px;
    color: #000000;
   margin: ${RFValue(10)}px;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
