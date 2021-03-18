import React from 'react';
import { View, StyleSheet, Image, Text, Platform, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import colors from '../config/colors';
import BodyText from '../components/BodyText';
import CardText from './CardText';
import { TouchableOpacity } from 'react-native-gesture-handler';

function CardMetals({ title, price }) {
   

    return (
        <View style={styles.card}>
            <View style={styles.top}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>€ {price} p/kg</Text>
            </View>
            <View style={styles.bottom}>
                <TextInput
                    style={styles.input}
                    placeholder="Aantal kilo's"
                    keyboardType="numeric"
                    returnKeyType="done"
                />
                <Text style={styles.totalPrice}>€ 0,-</Text>
            </View>
        </View>
       
    );
}

const styles = StyleSheet.create({
    blok: {
        justifyContent:  'center',
    },
    bottom: {
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    card: {
        marginVertical: 10,
        justifyContent:  'center',
    },
    icon: {
        color: colors.white,
        position: 'absolute',
        alignSelf: 'flex-end',
        paddingRight: 20,
    },
    image: {
        width: "40%",
        height: 100,
    },
    input: {
        height: 40,
        margin: 12,
        width: "40%",
        borderWidth: 1,
        paddingLeft: 10,
      },    
    price: {
        position: 'absolute',    
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        paddingRight: 10,
    },
    title: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        justifyContent: 'center',
    },
    top: {
        backgroundColor: colors.primary,
        height: 50,
        justifyContent: "center",
    },
    totalPrice: {
        position: 'absolute',  
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        paddingRight: 10,
    },
})

export default CardMetals;