
import React from "react";
import { SafeAreaView, StyleSheet } from 'react-native';

import ListingEditScreen from "./app/screens/ListingEditScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import AccountScreen from "./app/screens/AccountScreen";
import LoginScreen from "./app/screens/LoginScreen";
import TapeDeckSelect from "./app/screens/TapeDeckSelect";
import IconComponent from "./app/components/IconComponent";
import Screen from "./app/components/Screen";
import colors from "./app/config/colors";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";





function App(props) {
  return (<ListingEditScreen/>

  );
}

export default App;





































///// this is for rendering the "AppPicker"

// const categories = [
//   { label: "Furniture", value: 1},
//   { label: "Clothing", value: 2},
//   { label: "lamp", value: 3},
// ];

// export default function App(props) {
//   const [category, setCategory] = useState(false);

//   return (
//     <Screen>
//       <AppPicker 
//       selectedItem={category}
//       onSelectItem={(item) => setCategory(item)}
//       items={categories} 
//       icon="apps" 
//       placeholder="Category"/>
//       <AppTextInput icon="email" placeholder="email"/>

//     </Screen>
//     )}
    

//////// below here are olf input statements


    // import { View, Text, StyleSheet, ImageBackground, FlatList} from "react-native";
    // import {MaterialCommunityIcons} from '@expo/vector-icons';
    
    // import WelcomeScreen from "./app/screens/WelcomeScreen";
    // import PreviewScreen from "./app/screens/PreviewScreen";
    // import CustomText  from './app/components/AppText';
    // import colors from "./app/config/colors";
    // import CustomButton from "./app/components/CustomButton";
    // import Card from "./app/components/Card";
    // import AppText from "./app/components/AppText";
    // import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
    // import MessagesScreen from "./app/screens/MessagesScreen";
    // import IconComponent from "./app/components/IconComponent";
    // import Screen from "./app/components/Screen";
    // import ListItem from "./app/components/ListItem";
    // import ListItemSeparator from "./app/components/ListItemSeparator";
    // import { Colors } from "react-native/Libraries/NewAppScreen";
    // import AccountScreen from "./app/screens/AccountScreen";
    // import ListingsScreen from "./app/screens/ListingsScreen";