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
            <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Frase:</Text>
            <Text style={styles.textb}> {item.quote}</Text>
            <Text style={styles.text}>Autor:</Text>
            <Text style={styles.textb}> {item.author}</Text>
            <Text style={styles.text}>Serie:</Text>
            <Text style={styles.textb}> {item.series}</Text>
            </SafeAreaView>
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
            <Image source={require('../img/breakingbad2.jpg')} style={styles.mainImage}/>
            <SafeAreaView style={styles.container}>  
            <Button
              onPress={this.handlerBtn.bind(this)}
              title="Buscar Frases Random "
              color="#006400"
              accessibilityLabel="Learn more about this purple button"
            />
            </SafeAreaView> 
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
    mainImage:{
      width: 400,
      height: 200,
    },
    text:{
      color: "black",
      fontSize: 15,
      fontWeight: "bold",
      textAlign:"center",
    },
    textb:{
      color: "black",
      fontSize: 15,
      textAlign:"center",
    }
  });