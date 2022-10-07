import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


export const Container = styled.ScrollView`
    flex: 1;
    background-color: #D3D3D3; 
`;

export const Header = styled.View`
    margin-right:  ${RFValue(250)}px;
`;

export const NameProduct = styled.Text`
    margin-bottom: ${RFValue(30)}px;
    color: #000000;
    font-size: ${RFValue(30)}px;
    font-weight: bold;
`;

export const TitleContent = styled.View`
    justify-content: center; 
    align-items: center;
    
`;

export const Title = styled.Text`
    color: #000000;
    font-size: ${RFValue(20)}px;
    padding: ${RFValue(20)}px;
    align-content: center;
    justify-content: center;
    font-weight: bold;

`;

export const Image = styled.Image`
   width: ${RFValue(200)}px;
   height: ${RFValue(264)}px;
`;

export const Content = styled.View`
    padding: ${RFValue(10)}px;
`;

export const Category = styled.Text`
    color: #000000;
    font-size: ${RFValue(16)}px;
    padding: ${RFValue(30)}px;
    padding-top: ${RFValue(5)}px;
    align-content: center;
    justify-content: center;
`;
export const Description = styled.Text`
    color: #000000;
    font-size: ${RFValue(16)}px;
    padding: ${RFValue(30)}px;
    padding-top: ${RFValue(5)}px;
    align-content: center;
    justify-content: center;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
