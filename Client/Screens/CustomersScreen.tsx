import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import React, { useLayoutEffect, useState }  from 'react'
import { ScrollView, Text, StyleSheet,Platform, StatusBar, ActivityIndicator} from 'react-native'
import { useTailwind } from 'tailwind-rn'
import { TabStackParamsList } from '../NAvigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../NAvigator/RootNavigator';
import { useNavigation } from '@react-navigation/native';
import { Image, Input } from '@rneui/themed';

const StatusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export type CustomerScreenNavigationProps = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamsList, "Customers">,
NativeStackNavigationProp<RootStackParamList>
>;

  const CustomersScreen = ()=>{

    const [customerSearch, setCustomerSearch] = useState<string>("");

    const tw = useTailwind();
    const nav = useNavigation();
    useLayoutEffect(()=>{
        nav.setOptions({
            headerShown: false,
        });
    })
 
    return (
      <ScrollView style={cScreenStyles.container}>
        <Image source= {{uri: "https://static.vecteezy.com/system/resources/previews/002/399/288/original/delivery-courier-man-with-a-box-delivery-of-goods-vector.jpg"}}
        containerStyle={tw("w-full h-64")} 
        PlaceholderContent={<ActivityIndicator/>}/>
        <Input placeholder='Search by Customer' value={customerSearch} onChangeText={( text ) => {
            setCustomerSearch(text)}} style={cScreenStyles.input} inputMode='text' selectionHandleColor={"#59C1CC"} inputContainerStyle={tw("bg-white p-0 px-10 mt-10")}/>
        </ScrollView>
    )
  
}

const cScreenStyles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight  : 0,
    flex: 1,
    backgroundColor: "#59C1CC",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    
    color:"#59C1CC",
    fontStyle:"normal",

  }
})

export default CustomersScreen


