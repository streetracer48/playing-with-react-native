import React, { Component } from 'react'
import { Text, View,TextInput } from 'react-native'

export default class Login extends Component {

     onChangeText = (text) => {

    }
    
    render() {
    
        return (
            <View>
                <Text> Login with your Account information </Text>
             <TextInput  style={{ height: 40, borderColor: 'red', borderWidth: 1 }}
               onChangeText={text => onChangeText(text)}
             />
             <TextInput
             style={{height:40, borderColor:'green', borderWidth:1}}
             />
            </View>
        )
    }
}
