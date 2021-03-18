import React, { Component } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, Linking, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

import Screen from '../components/Screen';
import BodyText from '../components/BodyText';
import colors from '../config/colors';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSecondary';
import { color } from 'react-native-reanimated';


export default class App extends Component {
    render() {
      return (
        <ScrollView style={styles.scrollView}>
        <View>
            <View style={styles.informatie}>
                <View style={styles.adres}>
                    <FontAwesome style={styles.iconHome} name="home" size={36}/>
                    <BodyText style={styles.title}>Elcinco metaal{"\n"}Maasdijkseweg 138{"\n"}2291 PJ, Wateringen</BodyText>
                </View>
                <View style={styles.email}>
                    <FontAwesome style={styles.icon} name="envelope" size={30}/>
                    <Text onPress={this. _handleOpenMail} style={styles.textEmail}>info@elcinco.nl</Text>
                </View>
                <View style={styles.website}>
                    <FontAwesome style={styles.icon} name="globe" size={36}/>
                    <Text onPress={this. _handleOpenWithWebBrowser} style={styles.textWebsite}>www.elcincometaal.nl</Text>
                </View>
            </View>

            <View style={styles.containerButton}> 
                <ButtonPrimary onPress={this._handleOpenCall} title="Bel ons" />
                <ButtonSecondary onPress={this._handleOpenRoute} title="Route" />
            </View>

            <View style={styles.tijdenContainer}>
                <Text style={styles.tijdenTitel}>Openingstijden</Text>
                <View style={styles.dagContainer}>
                    <FontAwesome name="clock-o" size={24} color="white" />
                    <Text style={styles.dagText}>Ma:</Text>
                    <Text style={styles.tijdenText}>07:00 - 17:00</Text>
                </View>
                <View style={styles.dagContainer}>
                    <FontAwesome name="clock-o" size={24} color="white" />
                    <Text style={styles.dagText}>Di:</Text>
                    <Text style={styles.tijdenText}>07:00 - 17:00</Text>
                </View>
                <View style={styles.dagContainer}>
                    <FontAwesome name="clock-o" size={24} color="white" />
                    <Text style={styles.dagText}>Woe:</Text>
                    <Text style={styles.tijdenText}>07:00 - 17:00</Text>
                </View>
                <View style={styles.dagContainer}>
                    <FontAwesome name="clock-o" size={24} color="white" />
                    <Text style={styles.dagText}>Do:</Text>
                    <Text style={styles.tijdenText}>07:00 - 17:00</Text>
                </View>
                <View style={styles.dagContainer}>
                    <FontAwesome name="clock-o" size={24} color="white" />
                    <Text style={styles.dagText}>Vr:</Text>
                    <Text style={styles.tijdenText}>07:00 - 17:00</Text>
                </View>
                <View style={styles.dagContainer}>
                    <FontAwesome name="clock-o" size={24} color="white" />
                    <Text style={styles.dagText}>Za:</Text>
                    <Text style={styles.tijdenText}>08:00 - 12:00</Text>
                </View>
                <View style={styles.dagContainer}>
                    <FontAwesome name="clock-o" size={24} color="white" />
                    <Text style={styles.dagText}>Zo:</Text>
                    <Text style={styles.tijdenText}>Gesloten</Text>
                </View>
            </View>
        </View>
        </ScrollView>
      );
    }
    _handleOpenCall = () => {
      Linking.openURL('tel:+31(0)174-442217');
    };
    _handleOpenMail = () => {
        Linking.openURL('mailto:info@elcinco.nl');
      };
    _handleOpenRoute = () => {
        Linking.openURL('https://www.google.com/maps/dir//Maasdijkseweg+128,+2291+PJ+Wateringen/@52.015875,4.280259,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47c5b3f7b1d68191:0xd01cef56c02a2957!2m2!1d4.2824477!2d52.015875!3e0');
      };  
    _handleOpenWithWebBrowser = () => {
      WebBrowser.openBrowserAsync('https://elcincometaal.nl');
    };
  }

const styles = StyleSheet.create({
    buttonCall: {
        marginVertical: 20,
    },
    adres: {
        marginBottom: 30,
    },
    containerButton: {
        marginHorizontal: 20,
        marginVertical: 40,
    },
    dagContainer: {
        marginVertical: 10,
    },
    dagText: {
        position: 'absolute',
        marginLeft: 40,
        color: colors.white,
        fontSize: 16,
        marginTop: 2,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
    email: {
        marginVertical: 70,
    },
    informatie: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    iconHome: {
        position: 'absolute',
        marginTop: 16,
    },
    title: {
        position: 'absolute',
        marginLeft: 50,
    },
    tijdenContainer: {
        backgroundColor: colors.primary,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    tijdenTitel:{
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
    tijdenText: {
        position: 'absolute',
        marginLeft: 90,
        color: colors.white,
        fontSize: 16,
        marginTop: 2,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
    textWebsite: {
        position: 'absolute',
        marginLeft: 50,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: colors.primary,
        textDecorationLine: "underline",
        marginTop: 4,
    },
    textEmail: {
        position: 'absolute',
        marginLeft: 50,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: colors.primary,
        textDecorationLine: "underline",
        marginTop: 4,
    },
    website: {
        marginTop: -40,
    },
})

// export default ContactScreen;