import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, TextInput, Button, View, Text, FlatList, SafeAreaView, Image} from 'react-native';

const axios = require('axios');

export class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state ={consulteApi:false, item:[]};
        
      }
    
      handlerBtn(){
        axios.get("https://breakingbadapi.com/api/characters",{params:{name:this.state.nombre}})
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
      
      handlerLogout=()=>{
        console.log("Logouthome");
        //this.props.onLogout();
      }

    render(){
        const Item = ({ item, onPress, style }) => (
            <>
            <Text style={styles.text}>Nombre: {item.name}</Text>
            <Text style={styles.text}>Sobrenombre: {item.nickname}</Text>
            <Text style={styles.text}>Cumple: {item.birthday}</Text>
            <Text style={styles.text}>Estado: {item.status}</Text>
            <SafeAreaView style={styles.container}>
            <Image style={styles.tinyLogo} source={{uri: item.img}}/>
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
            <Image source={require('../img/brakingbad.jpg')} style={styles.mainImage}/>  
            <SafeAreaView style={styles.container}>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1,width:200 }}
            onChangeText={text => this.handlerText(text)}  
            />

            <Button
              onPress={this.handlerBtn.bind(this)}
              title="Buscar Personaje "
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
      width: 400,
      height: 500,
    },
        mainImage:{
      width: 400,
      height: 110,
    },
    text:{
      color: "black",
      fontSize: 15,
      fontWeight: "bold",
      textAlign:"center",
    }
  });