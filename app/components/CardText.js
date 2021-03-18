import React from 'react';
import { Platform, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

function CardText({ children }) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        color: colors.white,
        fontWeight: 'bold',
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
})

export default CardText;