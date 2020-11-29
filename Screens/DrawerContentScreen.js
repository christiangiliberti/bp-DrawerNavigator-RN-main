import React, {Component} from 'react';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements'
import { StyleSheet, TextInput, Button, View, Text, FlatList, SafeAreaView, Image} from 'react-native';

const axios = require('axios');
export class DrawerContentScreen extends Component {

    constructor(props){
        super(props);
    }

    handlerLogout=()=>{
        //console.log("Logoutdrawer");
        this.props.onLogout();
    }

    render(){

        return(
            <View style={styles.container}>
                <DrawerContentScrollView {...this.props}>
                    <View style={styles.topDrawer}>
                        <DrawerItem 
                            icon={() => <Icon type="material-community" name="home-outline" style={styles.icon}/>}
                            label="Home"
                            onPress={() => this.props.navigation.navigate("Home")}
                        />
                        <DrawerItem 
                            icon={() => <Icon type="material-community" name="calendar" style={styles.icon}/>}
                            label="Info"
                            onPress={() => this.props.navigation.navigate("Info")}
                        />
                    </View>
                </DrawerContentScrollView>
                <View style={styles.bottomDrawer}>
                    <DrawerItem 
                        icon={() => <Icon type="material-community" name="logout" style={styles.icon}/>}
                        label="Logout"
                        onPress={() => this.handlerLogout()}
                    />
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    icon:{
        color:'#517fa4'
    },
    topDrawer:{
        flex:1   
    },
    bottomDrawer: {
        flex:-1,
        justifyContent: 'flex-end',
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    }
});