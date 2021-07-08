
import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialmessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    }
]


function MessagesScreen(props) {
    
    // Below is the hook to allow for page refreshing

    const [refreshing, setRefreshing] = useState(false);

    // Delete the message from messages array
    // call the server to delete messages from backend

    const [messages, setMessages] = useState(initialmessages);
    const handleDelete = (message) => {
        const newMessages = messages.filter((m) => m.id !== message.id)
        setMessages(newMessages);

        // you can simplify this by combining const + setMessages: 
        // setMessages(messages.filter(m => m.id !== message.id)
    }

    return (
        <Screen>    
            <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) => 
                <ListItem
                title={item.title}
                subTitle={item.description}
                image={item.image}
                onPress={() => console.log("Message selected",item)}
                renderRightActions={() =>
                    <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
                    />}
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages([
                    {
                        id: 2,
                        title: 'Refresh worked!',
                        description: 'Keep going! You are doing great!',
                        image: require('../assets/mosh.jpg')
                    }
                ])
            }}
            /> 
        </Screen>
    );
}

const styles = StyleSheet.create ({

})
export default MessagesScreen;