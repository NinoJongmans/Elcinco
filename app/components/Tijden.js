import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

import colors from  '../config/colors';

function Tijden({ dag, tijd }) {
    return (
        <View style={styles.dagContainer}>
            <FontAwesome name="clock-o" size={24} color="white" />
            <Text style={styles.dagText}>{dag}</Text>
            <Text style={styles.tijdenText}>{tijd}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
    tijdenText: {
        position: 'absolute',
        marginLeft: 90,
        color: colors.white,
        fontSize: 16,
        marginTop: 2,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
})

export default Tijden;