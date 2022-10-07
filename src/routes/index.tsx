
import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './tab.routes';
import AppRoutes from './stack.routes';

const Routes = () => (
    <NavigationContainer>
        <TabRoutes />
    </NavigationContainer>
    
)

export default Routes;