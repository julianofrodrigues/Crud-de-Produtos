import React, {  ChangeEvent, useState } from 'react';
import { Button } from '../../components/Button';
import { Container, Title, ButtonContainer, Form, Header, Fields } from './styles';
import { useRoute, useNavigation } from "@react-navigation/core";
import { ProductsProps } from '../../components/ProductCard';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import  { yupResolver  }  from '@hookform/resolvers/yup';
import { Alert } from 'react-native';
import { InputForm } from '../../components/InputForm';
import { TextAreaForm } from '../../components/TextAreaForm';


interface Params{
  product: ProductsProps
}

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


export function UpdateProduct() {
  const navigation = useNavigation();
  const route = useRoute();
  const product = route.params as Params;
  const { control, handleSubmit, formState: { errors }  } = useForm({resolver: yupResolver(schema)});
  const [title, setTitle] = useState(product.product.title) ;
  const [category, setCategory] = useState(product.product.category);
  const [description, setDescription] = useState(product.product.description);

    function handleCancel(){
        navigation.goBack()
    }

    async function handleUpdate(form : FormData){
      if(form.title == ''){
        return Alert.alert('Falha ao alterar', 'Titulo obrigatório')
      }
      if(form.category == ''){
        return Alert.alert('Falha ao alterar', 'Categoria obrigatório')
      }
      if(form.description == ''){
        return Alert.alert('Falha ao alterar', 'Campo obrigatório')
      }
      try {
        await fetch(`https://dummyjson.com/products/${product.product.id}`, {
          method: 'PUT',
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
          'Alteração realizado com sucesso', 
          `Produto: ${form.title}\nCategoria: ${form.category}\nDescrição: ${form.description}`, 
          [{text: 'ok', onPress: () =>{navigation.navigate('Home')}}]
        )
      } catch (error) {
        console.log(error)
        Alert.alert('Não foi possível registrar')
      }
    }
  

  return (
    <Container>
        <Header>
            <Title>Alterar</Title>
        </Header>
        <Form>
          <Fields>
              <InputForm 
                name="title" 
                value={title}
                onChangeText={title => setTitle(title)}
                control={control} 
                placeholder='Nome do Produto' 
                autoCapitalize="sentences" 
                autoCorrect={false} 
                error={errors.title && errors.title.message} 
              />
              <InputForm 
                name="category"  
                onChangeText={category => setCategory(category)}
                value={category}
                placeholder='Categoria' 
                control={control}  
                autoCapitalize="sentences" 
                autoCorrect={false} 
                error={errors.category && errors.category.message}
              />
              <TextAreaForm 
                name='description' 
                onChangeText={description => setDescription(description)}
                value={description}
                placeholder='Descrição' 
                control={control}  
                autoCapitalize="sentences" 
                autoCorrect={false} 
                error={errors.description && errors.description.message}
              />
            </Fields>
            <ButtonContainer>
                <Button type="save" text='Salvar' activeOpacity={0.7} onPress={() => (handleUpdate({title, category, description})) } />
                <Button type="cancel" text='Cancelar' activeOpacity={0.7} onPress={handleCancel} />
            </ButtonContainer>
        </Form>
    </Container>
  );
}