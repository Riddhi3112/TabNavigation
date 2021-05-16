/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import tab1 from './src/views/tab1'
import tab2 from './src/views/tab2'
import tab3 from './src/views/tab3'
import tab4 from './src/views/tab4'
import tab5 from './src/views/tab5'
import {Image} from 'react-native';
// import IconImage from './src/components/iconImage/iconImage'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const TabNavigator = createBottomTabNavigator({
  Home: tab1,
  photo: tab2,
  book: tab3,
  notification: tab4,
  profile: tab5,
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        if (routeName === 'Home') {
          return <Image
            source={require('./src/images/tab1.png')}
            style={{ height: 20, width: 20, tintColor: tintColor }}
          />;
      
        } else if (routeName === 'photo') {
          return <Image
          source={require('./src/images/tab2.png')}
          style={{ height: 20, width: 20, tintColor: tintColor }}
        />;
        }
        else if (routeName === 'book') {
          return <Image
            source={require('./src/images/tab3.png')}
            style={{ height: 20, width: 20, tintColor: tintColor }}
          />;
        }
        else if (routeName === 'notification') {
          return <Image
            source={require('./src/images/tab4.png')}
            style={{ height: 20, width: 20, tintColor: tintColor }}
          />;
        }
        else if (routeName === 'profile') {
          return <Image
            source={require('./src/images/tab5.png')}
            style={{ height: 20, width: 20, tintColor: tintColor }}
          />;
        }
  
      },
    }),
    tabBarOptions: {
      activeTintColor: 'Black',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 12
      },
      tabStyle: {
        width: 100,
        top: 20
      },
      style: {
        backgroundColor: 'white',
        bottom: 40
      }
    },
  });
export default createAppContainer(TabNavigator);


const styles = StyleSheet.create({
 
  
  highlight: {
    fontWeight: '700',
  },
});

