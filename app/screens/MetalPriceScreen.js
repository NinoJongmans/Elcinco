import React from 'react';
import { View, Image,Text, StyleSheet, ScrollView, SafeAreaView, StatusBar, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Card from '../components/Card';




const Tweets = () => (
    <ContainerScreen />
    // <Screen>
    //   <Text>Tweets</Text>
    // </Screen>
  )
  const TweetDetails = () => (
    <Screen>
      <Text>TweetDetails</Text>
    </Screen>
  )
  
  const Stack = createStackNavigator();
  const StackNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen name="TweetDetails" component={TweetDetails} />
    </Stack.Navigator>
  )








function MetalPriceScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Card 
                    title="Koper"
                    image={require("../assets/koper.jpg")}
                    onPress={() => navigation.navigate("TweetDetails")}
                />
                <Button title="bekijk" />
                <Card 
                    title="Aluminium"
                    image={require("../assets/aluminium.jpg")}
                />
                <Card 
                    title="Kabel"
                    image={require("../assets/kabels.jpg")}
                />
                <Card 
                    title="Roestvrijstaal"
                    image={require("../assets/rvs.jpg")}
                />
                <Card 
                    title="Ijzer"
                    image={require("../assets/ijzer.jpg")}
                />
                <Card 
                    title="Lood en zink"
                    image={require("../assets/lood.jpg")}
                />
                <Card 
                    title="Loodaccu's"
                    image={require("../assets/loodaccus.jpg")}
                />
                <View style={styles.extra}></View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f4f4',
        padding: 20,
        paddingTop: 100,
        flex: 1,
        
    },
    extra: {
        height: 100,
    },  
    scrollView: {
        paddingHorizontal: 20,
        paddingTop: 60,
    },
})

export default MetalPriceScreen;