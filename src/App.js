import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from 'screens/Home';
import Profile from 'screens/Profile';
import Settings from 'screens/Settings';
import LeftMenu from 'LeftMenu';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabIcons = {
  'Home': 'dashboard',
  'Profile': 'archive',
  'Settings': 'bell',
};

const BottomTab = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        return <Icon name={TabIcons[route.name]} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#ffc845',
      inactiveTintColor: '#d2d2d2',
      labelStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      style: {
        height: 64,
      },
    }}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={LeftMenu}>
        <Drawer.Screen name="centreal" component={BottomTab} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
