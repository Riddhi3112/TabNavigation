import React, {Component} from 'react';
import {StyleSheet, View,Image} from 'react-native';
import TopTabbar from '../components/topTab/topTab';


export default class tab1 extends Component {
 render() {
    return (
          <TopTabbar />
      );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FCFF',
 },
 welcome: {
   fontSize: 20,
   textAlign: 'center',
   margin: 10,
 },
 instructions: {
   textAlign: 'center',
   color: '#333333',
   marginBottom: 5,
 },
});