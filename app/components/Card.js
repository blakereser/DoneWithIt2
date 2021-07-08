
import React from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

function Card({title, subTitle, image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}
const styles = StyleSheet.create( {
    card: {
        backgroundColor: colors.white,
        borderRadius: 15,
        marginHorizontal: 20,
        marginTop: 20,
        overflow: "hidden", 
    },
    detailsContainer: {
        padding: 10, 
    },
    image: {
        width: "100%",
        height: 200,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
    },
    title: {
        marginBottom: 10,
    },
}
);

export default Card;

// place this after the return statement in App.js

// (<View style={{
//     backgroundColor: "#f8f4f4",
//     padding: 20,
//     paddingTop: 100,
//   }}
//   >
//     <Card
//       title="Red jacket for sale"
//       subTitle="$100"
//       image={require("./app/assets/jacket.jpg")} 
//     ></Card>
//   </View>
//   )
// };
 