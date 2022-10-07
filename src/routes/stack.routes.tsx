import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import { ViewProduct } from "../pages/ViewProduct";
import { Home } from "../pages/Home";
import { UpdateProduct } from "../pages/UpdateProduct";


const stackRoutes = createStackNavigator()

const AppRoutes: React.FC = () =>(
    <stackRoutes.Navigator headerMode = "none" screenOptions={{cardStyle: {backgroundColor: '#FFFFFF'}}}>
        <stackRoutes.Screen 
            name="Home"
            component={Home}
        />

         <stackRoutes.Screen 
            name="ViewProduct"
            component={ViewProduct}
        />

        <stackRoutes.Screen 
            name="UpdateProduct"
            component={UpdateProduct}
        />

         
    </stackRoutes.Navigator>
)

export default AppRoutes;