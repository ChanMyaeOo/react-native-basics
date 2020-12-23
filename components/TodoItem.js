import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({item, pressHandler}) {
    return(
        <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <View style={styles.todoItem}>
                <MaterialIcons name='delete' size={18} color='#333'/>
                <Text style={styles.todoText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todoItem: {
        padding: 20,
        marginTop: 20,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#333',
        borderRadius: 4,
        flexDirection: 'row'
    },
    todoText: {
        marginLeft: 10
    }
})