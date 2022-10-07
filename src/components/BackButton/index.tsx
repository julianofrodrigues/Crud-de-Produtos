import React from "react";
import { Container, Icon, TextButton,  } from './styles';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from "@react-navigation/core";

export function BackButton() {
    const navigation = useNavigation();

    function handleGoback(){
      navigation.goBack()
    }

  return (
    <Container onPress={handleGoback}>
      <Icon icon={ faArrowLeft } size={20} />
      <TextButton>Voltar</TextButton>
    </Container>
  );
}