import React from "react";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import { Screen, BodyText } from "../components";

const validationSchema = Yup.object().shape({
  naam: Yup.string().required().min(2).label("Naam"),
  aantal: Yup.number().required().min(1).max(100).label("Aantal containers"),
  adres: Yup.string().required().min(2).label("Adres"),
  opmerkingen: Yup.string().label("Opmerkingen"),
  email: Yup.string().required().email().label("Email"),
  metalen: Yup.object().required().nullable().label("Metalen"),
  containerGrote: Yup.object().required().nullable().label("Container grote"),
  postcode: Yup.string().required().min(6).label("Postcode"),
  datum: Yup.string().required().min(6).label("Datum"),
});

const metalen = [
  { label: "Koper", value: 1 },
  { label: "Aluminium", value: 2 },
  { label: "Kabel", value: 3 },
  { label: "Roestvrijstaal", value: 4 },
  { label: "IJzer", value: 5 },
  { label: "Lood en Zink", value: 6 },
  { label: "Loodaccu's", value: 7 },
  { label: "Anders, leg uit in de opmerkingen", value: 8 },
];

const containerGrote = [
    { label: "15m3", value: 1 },
    { label: "25m3", value: 2 },
    { label: "50m3", value: 3 },
  ];

function ContainerScreen() {
  return (
    <Screen style={stylese.container}>
        <ScrollView style={stylese.scroll}>
            <BodyText style={stylese.text}>Heeft u veel metaal en kunt u een 
            container gebruiken? Vul onderstaand formulier in en we nemen zo 
            snel mogelijk contact met u op over de mogelijkheden.</BodyText>

            <Form
                initialValues={{
                naam: "",
                aantal: "",
                adres: "",
                opmerkingen: "",
                email: "",
                metalen: null,
                containerGrote: null,
                postcode: "",
                datum: "",
                }}
                onSubmit={() => alert('Verzonden!')}
                validationSchema={validationSchema}
            >
                <Picker items={metalen} name="metalen" placeholder="Soort metaal" />  
                <Picker items={containerGrote} name="containerGrote" placeholder="Grote van container" />  
                <FormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="aantal"
                    placeholder="Aantal containers"
                    returnKeyType="done"
                />
                <View style={{ marginTop: 20 }} />
                <FormField 
                    maxLength={255} 
                    name="naam" 
                    placeholder="Naam"
                    returnKeyType="done" />
                <FormField 
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress" 
                    returnKeyType="done"
                />
                <FormField 
                    maxLength={255} 
                    name="adres" 
                    placeholder="Adres"
                    returnKeyType="done" 
                />
                <FormField 
                    maxLength={255} 
                    name="postcode" 
                    placeholder="Postcode" 
                    returnKeyType="done" 
                />
                <View style={{ marginTop: 20 }} />
                <FormField 
                    maxLength={10} 
                    name="datum" 
                    placeholder="Datum" 
                    keyboardType = 'numeric' 
                    returnKeyType="done" />
                <FormField
                    maxLength={255}
                    multiline
                    name="opmerkingen"
                    numberOfLines={3}
                    placeholder="Opmerkingen"
                    returnKeyType="done"
                />
                <SubmitButton title="Verstuur" />
            </Form>
            <View style={stylese.extra} />
      </ScrollView>
    </Screen>
  );
}

const stylese = StyleSheet.create({
    extra: {
        height: 400,
    },
    text: {
      marginTop: Platform.OS === 'android' ? 0 : 20,
      marginBottom: 20,
    },
    scroll: {
        paddingHorizontal: 20,
    },
  });

export default ContainerScreen;