
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image, SafeAreaView} from 'react-native';

import * as Google from 'expo-google-app-auth'

export default class LoginScreen extends Component{

    // Acuerdense de poner su key de Google Console
    async _signInWithGoogle(){

        try {
            const result = await Google.logInAsync({
                androidClientId: "553496305737-0fm78n00bb4di1fgfk1h0ihfgpksg43u.apps.googleusercontent.com",
                scopes: ['profile', 'email'],
            });
    
            if (result.type === 'success') {
                try {
                    this.props.onLogin();
                } catch (error){
                    console.log("Something happened " + error);
                }
            } else {
                return { cancelled: true };
            }

        } catch (e) {
            return { error: true };
        }

    }

    render(){
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.container}>
                <Image source={require('../img/logo2.png')} style={styles.mainImage}/>
                </SafeAreaView>
                <SafeAreaView style={styles.container}>
                <Button
                    onPress={() => this._signInWithGoogle()}
                    title="Iniciar sesión con Google"
                    color="#006400"
                />
                </SafeAreaView>
            </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainImage:{
        width: 200,
        height: 120,
      }
});

/*

*/  
