import React from 'react';
import { Container, NameProduct, Description, Header, Category, Title, TitleContent, Content, Image, ButtonContainer } from './styles';
import { useRoute } from "@react-navigation/core";
import { BackButton } from '../../components/BackButton';
import { ProductsProps } from '../../components/ProductCard';
import { Button } from '../../components/Button';
import { useNavigation } from "@react-navigation/core";
import { Alert } from 'react-native';




interface Params{
  product: ProductsProps
}

export function ViewProduct() {
    const route = useRoute();
    const product = route.params as Params;
    const navigation = useNavigation();


    function handleEdit(product: ProductsProps){
      // console.log(product)
      navigation.navigate('UpdateProduct', {product})
    }

    function handleDelete(product: ProductsProps){
      Alert.alert('Deletar', `Deseja deletar o produto ${product.title}?`,[
          {
              text: 'Não 🙏🏻',
              style: 'cancel'
          },
          {
              text: 'Sim 😢',
              onPress: async () => {
                  try {
                      await fetch(`https://dummyjson.com/products/${product.id}`, {
                          method: 'DELETE',
                        })
                        .then(res => res.json())
                        .then(console.log);
                        Alert.alert(
                          'Produto deletado com sucesso', 
                          `Produto deletado: ${product.title}`, 
                          [{text: 'ok', onPress: () =>{navigation.navigate('Home')}}]
                        )   
                  } catch (error) {
                      Alert.alert('Não foi possivel deletar o produto!')
                  }
              }
          }
      ])
  }
    
  return (
    <Container>
        <Header>
          <BackButton />
        </Header>
        <TitleContent>
          <NameProduct>{product.product.title}</NameProduct>
          <Image source={{uri: product.product.thumbnail}} />
        </TitleContent>
        <Content>
          <Title>Categoria</Title>
          <Category>{product.product.category}</Category>
          <Title>Descrição</Title>
          <Description>{product.product.description}</Description>
        </Content>
        <ButtonContainer>
            <Button type="update" text='Editar' activeOpacity={0.7} onPress={() =>{handleEdit(product.product)}} />
            <Button type="cancel" text='Deletar' activeOpacity={0.7} onPress={()=>{handleDelete(product.product)}} />
        </ButtonContainer>
    </Container>
  );
}