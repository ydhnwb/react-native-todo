import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Button, Alert} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import { FAB } from 'react-native-paper';
import {Header} from '../components/header';
import ItemTodo from '../components/item_todo';

export function PageHome({navigation}) {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await fetch('https://btm-rn.herokuapp.com/api/v1/todo')
      .then((res) => res.json())
      .then((resultInJson) => resultInJson.results)
      .catch((error) => {
        console.log(error);
      });
    setTodos(response);
  };

  useEffect(() => {
    navigation.addListener("focus", () => {
      fetchTodos();
    })
    // fetchTodos();
  }, []);

  const pressHandler = (todoKey) => {
    setTodos((previousTodos) => {
      return previousTodos.filter((todo) => todo._id != todoKey);
    });
  };

  const goToAddPage = () => {
    navigation.navigate('Create');
  };

  const deleteTodo = async (id) => {
    const response = await fetch(`https://btm-rn.herokuapp.com/api/v1/todo/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .catch(err => console.log(err))

    if(response.success === true){
      fetchTodos();
    }else{
      console.log("Tidak dapat menghapus")
    }
  }

  const createTwoButtonAlert = (todo) =>
    Alert.alert(
      "Hapus",
      "Anda yakin ingin mengapus todo ini?",
      [
        {
          text: "Edit",
          onPress: () => navigation.navigate("Detail", {
            data: todo
          })
        },
        {
          text: "Batal",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Hapus", onPress: () => deleteTodo(todo._id) }
      ],
      { cancelable: false }
    );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <ItemTodo todo={item} pressHandler={createTwoButtonAlert} />
          )}
        />
      </View>

      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => goToAddPage()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  list: {
    margin: 16,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    padding: 6,
    right: 0,
    bottom: 0,
  },
});
