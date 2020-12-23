import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Learn React', id: '1'},
    {text: 'Go Walk', id: '2'},
    {text: 'Play Game', id: '3'},
  ])

  const pressHandler = (id) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

  const submitHandler = (todo) => {
    if(todo.length > 3) {
      setTodos(prevTodos => {
        return [
          {text: todo, id: Math.random().toString()},
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('Oops!', 'Todo must be 3 chars long', [
        {text: 'Understood', onPress: () => console.log('Alert Closed')}
      ])
    }
    
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.content}>
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});
