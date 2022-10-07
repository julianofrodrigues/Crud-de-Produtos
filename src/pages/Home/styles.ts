import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #D3D3D3; 
`;

export const Content = styled.View`
    padding-top: ${RFValue(30)}px;
    align-items: center;
    justify-content: center;
    margin: ${RFValue(10)}px;
`;

export const Greeting = styled.Text`
    color: #000000;
    font-size: ${RFValue(24)}px;
    font-weight: bold;
`;

export const TitleList = styled.Text`
    padding: ${RFValue(30)}px;
    font-size: ${RFValue(24)}px;
    color: #000000;
    align-items: center;
    justify-content: center;
`;

export const List = styled.FlatList`
   width: 90%;
   margin-bottom: ${RFValue(50)}px;
`;