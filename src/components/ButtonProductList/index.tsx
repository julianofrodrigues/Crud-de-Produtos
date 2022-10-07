import React from "react";
import { Container, Icon,  } from './styles';
import { faEye, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
    type: 'view' | 'update' | 'delete'
}

const icon = {
    view: faEye,
    update: faPenToSquare,
    delete: faTrash
}

export function ButtonProductList({type, ...rest} : Props) {
  return (
    <Container type={type} {...rest}>
      <Icon icon={ icon[type] } size={16} />
    </Container>
  );
}