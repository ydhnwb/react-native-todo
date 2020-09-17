import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    ScrollView,
    TextInput,
    StyleSheet,
    Button
} from 'react-native';

export function PageAddTodo({ navigation }){
    const [aTitle, setTitle] = useState('');
    const onTodosNameChange = (e) => {
        setTitle(e);
    }

    const postTodo = async () => {
        const obj = {
            title: aTitle
        }
        
        const response = await fetch("https://btm-rn.herokuapp.com/api/v1/todo",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        .then(res => res.json())
        .catch(err => {
            console.log(err)
        })
        console.log(response)
        if(response.results){
            navigation.goBack()
        }else{
            console.log(response.err)
            console.log("Failed to create")
        }
    }

    return(
        <ScrollView style={styles.root}>
            <TextInput 
                style={styles.input} 
                onChangeText={onTodosNameChange} 
                placeholder="Todo's title"/>
            <Button
                onPress={() => postTodo()}
                title="Save"
                color="#ff5500"
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    root: {
        padding: 16
    },
    input: {
        marginBottom: 16,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",

    }
})