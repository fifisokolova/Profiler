
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TextInput,
    Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Login from '.node_modules';

const {width: WIDTH } = Dimensions.get('window')

export default class Profiler extends Component {
  render() {
    return (

      <View style={styles.container}>

      </View>

      <View>
         <Text Input
            style={styles.input}
            placeholder={'Username'}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
         />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(125,105,155,0.7)',
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25
}
});
