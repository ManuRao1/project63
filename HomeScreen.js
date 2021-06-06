import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component {
    render(){
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
         Dictionary App
        </Text>
      <TextInput
          styles={styles.inputBox}
          onChangeText={
              text => {
                  this.setState({
                      text: text,
                      isSearchPressed : false,
                      word = "Loading...",
                      lexicalCategory : '',
                      examples : [] ,
                      defination : ""
                  });
              }
          }
          value={this.state.text}
        />
        <TouchableOpacity style = {styles.button}>
        onPress{ () => {
            this.setState({ isSearchPressed: true});
            this.getWord(this.state.text)
        }

        }
        <Text> GO </Text>
        </TouchableOpacity>
      </View>
    );
  }
  }