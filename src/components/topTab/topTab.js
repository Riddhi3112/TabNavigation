import * as React from 'react';
import { Image, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTranslation } from 'react-i18next';
import Images from '../../images/map';
import Colors from '../../theme/colors';
import styles from './styles';

function TabContent() {
    const { t } = useTranslation();
  return (
    <View style={styles.mainView}>
      <Image source={Images.play}/>
      <Text style={styles.CenterText}>{t('HOMESCREENTEXT')}</Text>
    </View>
  );
}


const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    const { t } = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName="collection"
      tabBarOptions={{
        scrollEnabled: true,
        activeTintColor: Colors.black,
        tabStyle: { width: 'auto' },
        indicatorStyle: {backgroundColor: Colors.ActiveTint, height: 1},
        labelStyle: { fontSize: 12, color: Colors.TabText },
        style: styles.TabBarMain,
      }}
    >
    <Tab.Screen
        name="Search"
        component={TabContent}
        options={{ tabBarLabel: ({ tintColor }) => (
            //Your icon component for example => 
            <Image style={{width:20, height: 20}} source = {Images.Search}/>
          ) }}
      />
      <Tab.Screen
        name="collection"
        component={TabContent}
        options={{ tabBarLabel: t('TAB_1') }}
      />
      <Tab.Screen
        name="course"
        component={TabContent}
        options={{ tabBarLabel: t('TAB_2') }}
      />
      <Tab.Screen
        name="Books"
        component={TabContent}
        options={{ tabBarLabel: t('TAB_3') }}
      />
       <Tab.Screen
        name="collection1"
        component={TabContent}
        options={{ tabBarLabel: t('TAB_1') }}
      />
       <Tab.Screen
        name="course1"
        component={TabContent}
        options={{ tabBarLabel: t('TAB_2') }}
      />
       <Tab.Screen
        name="Books1"
        component={TabContent}
        options={{ tabBarLabel: t('TAB_3') }}
      />
    </Tab.Navigator>
  );
}
export default function TopTabbar() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
