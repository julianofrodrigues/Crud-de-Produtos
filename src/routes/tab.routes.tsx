import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Platform } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { Home } from "../pages/Home";
import { CreateProduct } from "../pages/CreateProduct";
import AppRoutes from "./stack.routes";


const AppTab = createBottomTabNavigator()

const TabRoutes = () =>{
    return(
        <AppTab.Navigator
            screenOptions={{
                headerShown: false
            }}
            tabBarOptions={{
                activeTintColor: '#04AA6D',
                inactiveTintColor: '#D3D3D3',
                labelPosition: 'beside-icon',
                style:{
                    paddingVertical: Platform.OS == 'ios' ? 20 : 0,
                    height: Platform.OS == 'ios' ? 88 : 80,
                }
            }}>
              <AppTab.Screen 
                    name="Lista de Produtos"
                    component={AppRoutes}
                    options={{
                        tabBarIcon: (({size, color}) => (<FontAwesomeIcon icon={faHome} size={size} color={color} />))
                    }}
              />  
              <AppTab.Screen 
                name="Adicionar Produto"
                component={CreateProduct}
                options={{
                    tabBarIcon: (({size, color}) => (<FontAwesomeIcon icon={faFloppyDisk} size={size} color={color} />))
                }}
              />  
            </AppTab.Navigator>
    )
}

export default TabRoutes;