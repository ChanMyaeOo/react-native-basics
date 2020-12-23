import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button} from 'react-native';

export default function AddTodo({submitHandler}) {
    const [text, setText ] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }
    return(
        <View>
        <TextInput 
            placeholder='add todo...'
            onChangeText={changeHandler}
            style={styles.input}
            value={text}
        />

        <View style={styles.addButton}>
            <Button 
                title="Add Todo"
                color="coral"
                onPress={() => {
                    submitHandler(text)
                    setText('')
                }}
            />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginTop: 30,
        height: 40,
        marginHorizontal: 30
    },
    addButton: {
        marginHorizontal: 30,
        marginTop: 20
    }
})