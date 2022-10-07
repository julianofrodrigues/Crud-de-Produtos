import React from "react";
import { Container, Icon, TextButton,  } from './styles';
import { faTrash, faPenToSquare, faFloppyDisk, faXmark } from '@fortawesome/free-solid-svg-icons'
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
    type:  'update' | 'delete' | 'save' | 'cancel',
    text: string,
}

const icon = {
    update: faPenToSquare,
    delete: faTrash,
    save:   faFloppyDisk,
    cancel: faXmark

}

export function Button({type, text, ...rest} : Props) {
  return (
    <Container type={type} {...rest}>
      <Icon icon={ icon[type] } size={20} />
      <TextButton>{text}</TextButton>
    </Container>
  );
}