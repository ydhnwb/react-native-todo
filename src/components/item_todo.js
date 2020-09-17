import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';


export default function ItemTodo({ todo, pressHandler }){

    return(
        <TouchableOpacity style={styles.todo_root} onPress={ () => pressHandler(todo)}>
            <Text style={styles.todo_item}>{todo.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo_root: {
        elevation: 2
    },
    todo_item: {
        color: "#464646",
        padding: 16,
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        marginBottom: 8
    }
})