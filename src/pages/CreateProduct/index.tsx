import React from 'react';
import { Button } from '../../components/Button';
import { Container, Title, ButtonContainer, Form, Header, Fields } from './styles';
import { useNavigation } from "@react-navigation/core";
import { InputForm } from '../../components/InputForm';
import { TextAreaForm } from '../../components/TextAreaForm';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import  { yupResolver  }  from '@hookform/resolvers/yup';
import { Alert } from 'react-native';

interface FormData{
  title: string;
  category: string;
  description: string;
}

const schema = Yup.object().shape({
  title: Yup.string().required('Titulo obrigatório'),
  category: Yup.string().required('Categoria obrigatório'),
  description: Yup.string().required('Descrição obrigatório'),
})


export function CreateProduct() {

  const navigation = useNavigation();
  const { control, reset, handleSubmit, formState: { errors }  } = useForm({resolver: yupResolver(schema)});

    function handleBack(){
        reset()
        navigation.goBack()
    }

    async function handleRegister(form: FormData){
      try {
        await fetch('https://dummyjson.com/products/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: form.title,
            category: form.category,
            description: form.description,
          })
        })
        .then(res => res.json())
        .then(console.log);
        Alert.alert(
          'Cadastro realizado com sucesso', 
          `Produto: ${form.title}\nCategoria: ${form.category}\nDescrição: ${form.description}`, 
          [{text: 'ok', onPress: () =>{reset(); navigation.navigate('Home')}}]
        )
        
        
      } catch (error) {
        console.log(error)
        Alert.alert('Não foi possível registrar')
      }
    }

  return (
    <Container>
        <Header>
            <Title>Cadastrar</Title>
        </Header>
        <Form>
          <Fields>
            <InputForm 
              name="title" 
              control={control} 
              placeholder='Nome do Produto' 
              autoCapitalize="sentences" 
              autoCorrect={false} 
              error={errors.title && errors.title.message} 
            />
            <InputForm 
              name="category"  
              placeholder='Categoria' 
              control={control}  
              autoCapitalize="sentences" 
              autoCorrect={false} 
              error={errors.category && errors.category.message}
            />
            <TextAreaForm 
              name='description'  
              placeholder='Descrição' 
              control={control}  
              autoCapitalize="sentences" 
              autoCorrect={false} 
              error={errors.description && errors.description.message}
            />
          </Fields>
            <ButtonContainer>
                <Button type='save' text='Salvar' activeOpacity={0.7} onPress={handleSubmit(handleRegister)} />
                <Button type="cancel" text='Cancelar' activeOpacity={0.7} onPress={handleBack} />
            </ButtonContainer>
        </Form>
    </Container>
  );
}


