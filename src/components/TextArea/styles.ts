import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
    width: 100%;
    height: ${RFValue(200)}px;
    padding: 16px 18px;
    font-size: ${RFValue(14)}px;
    background-color: #FFFFFF;
    border-radius: ${RFValue(5)}px;
    margin-bottom: ${RFValue(8)}px;
    color: #000000;
`;