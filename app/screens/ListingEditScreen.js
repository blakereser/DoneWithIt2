import React from 'react';
import { StyleSheet} from 'react-native';
import * as Yup from 'yup';

// import {
//     AppForm, 
//     AppFormField, 
//     SubmitButton, 
//     AppFormPicker
// } from '../components/forms';

import AppFormPicker from '../components/forms/AppFormPicker';
import AppForm from '../components/forms/AppForm';
import SubmitButton from '../components/forms/SubmitButton';
import AppFormField from '../components/forms/AppFormField';


import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),

});

const categories = [
    { label: "Furniture", value: 1},
    { label: "Clothing", value: 2},
    { label: "Camera", value: 3},
];

function ListingEditScreen() {
 
    return (
        <Screen style={styles.container}>

            <AppForm
                initialValues={{ title: "", price: "", description: "", category: null,}}
                onSubmit={(values) => (console.log(values))}
                validationSchema={validationSchema}
            >
                <AppFormField maxLength={255} name="title" placeholder="Title"/>
                <AppFormField
                    keyboardType="number-pad"
                    maxLength={8} //10000.99
                    name="price"
                    placeholder="Price"
                />
                <AppFormPicker
                    items={categories}
                    name="category"
                    placeholder="Category"
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    numberOfLines={3}
                    name="description"                    placeholder="Description"
                    />
                <SubmitButton title="Post"/>
            </AppForm>
        </Screen>
    );
}
const styles = StyleSheet.create ( {
    container: {
        margin: 10, 
    },
});

export default ListingEditScreen;







