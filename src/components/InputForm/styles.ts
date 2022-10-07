import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 100%;
`;

export const Error = styled.Text`
    color: #ff0000;
    font-size: ${RFValue(14)}px;
    margin: 7px;
`;