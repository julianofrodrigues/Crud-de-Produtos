import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.ScrollView`
    flex: 1;
    background-color: #D3D3D3; 
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(113)}px;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
`;

export const Title = styled.Text`
    color: #000000;
    font-size: ${RFValue(20)}px;
    font-weight: bold;
`;

export const Form = styled.View`
    margin: ${RFValue(20)}px;
    align-items: center;
    justify-content: center;
`;

export const Fields = styled.View`
   width: 100%;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;