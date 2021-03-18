import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Platform, ScrollView } from 'react-native';
import BodyText from '../../components/BodyText';

import Screen from '../../components/Screen';
import CardMetals from '../../components/CardMetals';

function AccuPrijsScreen(props) {
    return (
        <Screen>
            <Image style={styles.bannerImage} source={require("../../assets/loodaccus.jpg")} />
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    <BodyText style={styles.update}>Laatst bijgewerkt: 08-03-2021 15:23</BodyText>
                    <CardMetals title="Loodaccu's" price="6,10" />
                    <View style={styles.extra} />
                </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    bannerImage: {
        width: "100%",
        height: 150,
        alignSelf: 'center',
        marginTop: Platform.OS === "android" ? -24 : 0,
        marginBottom: 20,
        resizeMode: 'cover',
    },
    container: {
        marginHorizontal: 20,
    },
    extra: {
        height: 200,
    },
    update: {
        fontSize: 16,
        marginBottom: 10,
    },
    scroll: {
        paddingBottom: 100,
        marginBottom: 20,
    },
})

export default AccuPrijsScreen;