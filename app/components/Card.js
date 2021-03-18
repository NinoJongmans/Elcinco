import React from 'react';
import { View, StyleSheet, Image, Text, Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import colors from '../config/colors';
import BodyText from '../components/BodyText';
import CardText from './CardText';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Card({ title, image, link }) {
    return (
        <View style={styles.card}>
            <TouchableOpacity style={styles.blok} onPress={link}>
                <Image style={styles.image} source={image} />
                <Text style={styles.title}>{title}</Text>
                <FontAwesome style={styles.icon} name="chevron-right" size={20}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    blok: {
        justifyContent:  'center',
    },
    card: {
        backgroundColor: colors.primary,
        marginBottom: 20,
        justifyContent:  'center',
        borderTopWidth: 5,
        borderTopColor: colors.secondary,
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
    title: {
        position: 'absolute',
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: Platform.OS === "android" ? 155 : 180,
    },
})

export default Card;