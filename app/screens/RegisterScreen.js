

import React from 'react';
import { StyleSheet} from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {AppForm, AppFormField, SubmitButton} from '../components/forms';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
 
    return (
        <Screen style={styles.container}>

            <AppForm
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={(values) => (console.log(values))}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    keyboardType="default"
                    name="name"
                    placeholder="Name"
                    textContentType="name"
                    />
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
                    secureTextEntry={true} // since the default is true you can shorten this code to read: secureTextEntry
                    textContentType="password"
                    />
                <SubmitButton title="register"/>
            </AppForm>
        </Screen>
    );
}
const styles = StyleSheet.create ( {
    container: {
        margin: 10, 
    },
})

export default RegisterScreen;