import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require{'.pics/Logo1.png'}}
                        />
                    </View>
                    </View style{styles.formContainer}>
                </View>
            </View>


        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },

    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    
    logo: {
        width: 100,
        height: 100
        }
});