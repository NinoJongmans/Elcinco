import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function ButtonSecondary({ title, onPress }) {
    return (
        <TouchableOpacity  style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 13,
        width: '45%',
        marginRight:0,
        alignSelf: 'flex-end',
        marginTop: -45,
    },
    text: {
        color: colors.white,
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})

export default ButtonSecondary;