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
 import { createBottomTabNavigator } from 'react-navigation-tabs';
 import tab1 from '../../views/tab1'
 import tab2 from '../../views/tab2'
 import tab3 from '../../views/tab3'
 import tab4 from '../../views/tab4'
 import tab5 from '../../views/tab5'
 import Images from '../../images/map'
 import {
   StyleSheet,
 } from 'react-native';
import RenderIcons from '../iconImage/iconImage';

 
 const TabNavigator = createBottomTabNavigator({
   Home: {
     screen: tab1,
     title: 'tab1',
   },
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
           return <RenderIcons image={Images.home} tintColor={tintColor} />;
         } else if (routeName === 'photo') {
           return <RenderIcons image={Images.Photo} tintColor={tintColor} />;
         }
         else if (routeName === 'book') {
           return <RenderIcons image={Images.Book} tintColor={tintColor} />;
         }
         else if (routeName === 'notification') {
           return <RenderIcons image={Images.Notification} tintColor={tintColor} />;
         }
         else if (routeName === 'profile') {
           return <RenderIcons image={Images.Profile} tintColor={tintColor} />;
         }
   
       }
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
 
 