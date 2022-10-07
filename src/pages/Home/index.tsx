import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Text } from 'react-native';
import { ProductCard, ProductsProps } from '../../components/ProductCard';
import { Container, Content, Greeting, List, TitleList } from './styles';
import { useNavigation } from "@react-navigation/core";



export function Home(){
    const [greeting, setGreeting] = useState('');
    const [selectProduct, setSelectProduct] = useState<ProductsProps[]>([]);
    const [products, setProducts] = useState<ProductsProps[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductsProps[]>([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const navigation = useNavigation();

   

    useEffect(() => {
        const currentHour = new Date().getHours();
        if(currentHour < 12){
            setGreeting('Bom dia!');
        }
        else if(currentHour >= 12 && currentHour < 18){
            setGreeting('Boa Tarde!');
        }
        else{
            setGreeting('Boa noite!');
        }
    }, []);

    function handleListSelected(product: ProductsProps){
        navigation.navigate("ViewProduct", {product})
    }

    function handleListEdit(product: ProductsProps){
        navigation.navigate('UpdateProduct', {product})
    }

    function handleListDelete(product: ProductsProps){
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
                          .then(res => res.json());
                          setFilteredProducts((oldData) => ( oldData?.filter((item) => item.id != product.id) ))
                        
                    } catch (error) {
                        Alert.alert('Não foi possivel deletar o produto!')
                    }
                }
            }
        ])
    }

    async function loadingProducts() {
        const data = await fetch(`https://dummyjson.com/products/?limit=5&skip=${page}`).then(response => response.json());
        if(!data){
            return setLoading(true)
        }
        if(page > 1){
            setProducts(oldValue => [...oldValue, ...data.products]);
            setFilteredProducts(oldValue => [...oldValue, ...data.products])
        }else{
            setProducts(data.products);
            setFilteredProducts(data.products)

        }
        setLoading(false)
        setLoadingMore(false)
    }
    function handleFetchMore(distance: number){
        if(distance < 1)
            return; 
            setLoadingMore(true);
            setPage(oldValue => oldValue + 5);
            loadingProducts()
    }


    useEffect(() => {
        loadingProducts()
    }, [])
    
    // fetch('https://dummyjson.com/products/?limit=5').then(response => response.json()).then(data => console.log(data.products))  

  return (
    <Container>
        <Content>
            <Greeting>{greeting}</Greeting>
            <TitleList>Lista de Produtos</TitleList>
            <List 
                data={filteredProducts} 
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item })=>( 
                    <ProductCard 
                        data={{title: `${item.title}`}} 
                        onPressView={() => handleListSelected(item)} 
                        onPressEdit={() => handleListEdit(item)}
                        onPressDelete={() => handleListDelete(item)}
                    />)}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.1}
                onEndReached={({ distanceFromEnd}) => handleFetchMore(distanceFromEnd)}
                ListFooterComponent={loadingMore ? <ActivityIndicator color='#000000' /> : <></>}
            />
           
        </Content>
    </Container>
  )
}
