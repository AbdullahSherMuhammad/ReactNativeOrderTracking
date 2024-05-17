import React, { useLayoutEffect } from 'react'
import CustomersScreen from '../Screens/CustomersScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrdersScreen from '../Screens/OrdersScreen';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';

export type TabStackParamsList={
    Customers: undefined;
    Orders: undefined;
}


const Tab = createBottomTabNavigator<TabStackParamsList>();

const TabNavigator = () => {

    const nav = useNavigation();
    useLayoutEffect(()=>{
        nav.setOptions({
            headerShown: false,
        });
    })

    return (
        <Tab.Navigator screenOptions={({route})=>({
            tabBarActiveTintColor: "#59C1CC",
            tabBarInactiveTintColor: "grey",
            tabBarIcon: ({focused})=>{
                if(route.name === 'Customers'){
                    return(
                        <Icon name="users" type="entypo" color={focused?"#59C1CC":"grey"}/>
                    )
                } else if(route.name === 'Orders') {
                    return(
                        <Icon name="box" type="entypo" color={focused?"#EB6A7C":"grey"}/>
                    )
                }
            }
        })}>
            <Tab.Screen name="Customers" component={CustomersScreen} />
            <Tab.Screen name='Orders' component={OrdersScreen}/>
        </Tab.Navigator>
    );
};

export default TabNavigator
