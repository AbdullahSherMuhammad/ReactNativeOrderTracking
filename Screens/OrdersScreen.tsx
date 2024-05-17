import React, { useLayoutEffect } from 'react'
import { SafeAreaView, Text, StyleSheet, Platform, StatusBar } from 'react-native'
import { useTailwind } from 'tailwind-rn'
import { useNavigation } from '@react-navigation/native';

  const OrdersScreen = ()=>{

    const tw = useTailwind();
    const nav = useNavigation();
    useLayoutEffect(()=>{
        nav.setOptions({
            headerShown: false,
        });
    })
 
    return (
      <SafeAreaView style={styles.container}>
        <Text style={tw("text-red-500")}> Orders in Here! </Text>
        </SafeAreaView>
    )
  
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight  : 0,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default OrdersScreen


