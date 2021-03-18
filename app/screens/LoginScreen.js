import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';


import {AppForm, AppFormField, SubmitButton} from '../components/forms';
import Screen from '../components/Screen';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress" 
                />
                <AppFormField 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password" 
                />
                <SubmitButton title="Login" />
            </AppForm> 
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    error: {
        color: 'red',
        fontSize: 16,
    },
    logo: {
        width: '40%',
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 50,
    },
    
})

export default LoginScreen;