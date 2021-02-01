import React from 'react';
import { DrawerActions } from '@react-navigation/native';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const SidebarToggle = ({ navigation }) => (
  <View>
    <TouchableOpacity style={buttonStyle} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
      <Icon name="menu" size={32} color="#555" />
    </TouchableOpacity>
  </View>
);

const buttonStyle = {
  padding: 16,
};

export default SidebarToggle;
