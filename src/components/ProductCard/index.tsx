import React from "react";
import { Alert, TextProps } from "react-native";
import { ButtonProductList } from "../ButtonProductList";
import { ButtonContainer, Container, Name } from './styles';
import { useNavigation } from "@react-navigation/core";


export interface ProductsProps {
    id: string,
    title: string,
    description?: string,
    price?: number,
    discountPercentage?: number,
    rating?: number,
    stock?: number,
    brand?: string,
    category?: string,
    thumbnail?: string,
    images?: string[], 
    isDeleted?: boolean
}

interface ProductCard extends TextProps{
    data: ProductsProps,
    onPressView?: () => void
    onPressEdit?: () => void
    onPressDelete?: () => void
}


export  function ProductCard({ data, onPressView, onPressEdit, onPressDelete } : ProductCard){
    const navigation = useNavigation();


    function handleEdit(){
        navigation.navigate('UpdateProduct')
    }

    function handleDelete(){
        Alert.alert('Deletar', `Deseja deletar o produto?`,[
            {
                text: 'Não 🙏🏻',
                style: 'cancel'
            },
            {
                text: 'Sim 😢',
                onPress: async () => {''}
            }
        ])
    }

    return (
        <Container>
            <Name>{data.title}</Name>
            <ButtonContainer >
                <ButtonProductList type="view" activeOpacity={0.7} onPress={onPressView} />
                <ButtonProductList type="update" activeOpacity={0.7} onPress={onPressEdit}/>
                <ButtonProductList type="delete" activeOpacity={0.7} onPress={onPressDelete} />
            </ButtonContainer>      
        </Container>
    )
  }

 
