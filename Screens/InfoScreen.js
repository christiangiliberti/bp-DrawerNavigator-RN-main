import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, TextInput, Button, View, Text, FlatList, SafeAreaView, Image} from 'react-native';

const axios = require('axios');


export class InfoScreen extends Component {
    constructor(props){
        super(props);
        this.state ={consulteApi:false, item:[]};
        
      }
    
      handlerBtn(){
        axios.get("https://breakingbadapi.com/api/quote/random")
        .then(response=>{
          console.log(response);
         this.setState(() => {return {consulteApi: true, item: response.data}});
        })
        .catch(error=>{
          console.log(error);
        });
        console.log("Click");
      }
    
      handlerText(text){
        this.setState({nombre: text});
      }
    

    render(){
        const Item = ({ item, onPress, style }) => (
            <>
            <Text>Titulo:</Text>
            <Text> {item.quote}</Text>
            <Text>Temporada:</Text>
            <Text> {item.author}</Text>
            <Text>Serie:</Text>
            <Text> {item.series}</Text>
            </>
        );
        const renderItem = ({ item }) => {
          return (
            <Item
              item={item}
            />
          );
        };
        return(
            <>
            <View style={styles.container}>
             
            <Button
              onPress={this.handlerBtn.bind(this)}
              title="Buscar Frases Random "
              color="#006400"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
          
          <SafeAreaView style={styles.container}>
          <FlatList
              data={this.state.item}
              renderItem={renderItem}
              keyExtractor={(item) => item.char_id}
            />
          </SafeAreaView>
          </>
        );
    }
    
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: `#f0f8ff`,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo: {
      width: 200,
      height: 400,
    },
  });