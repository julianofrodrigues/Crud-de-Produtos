import React from "react";
import { TextInputProps } from "react-native";
import { Container } from "./styles";

type Props = TextInputProps

export function TextArea({...rest} : Props){
    return(
        <Container {...rest} editable maxLength={40} multiline numberOfLines={4} />
    )
}