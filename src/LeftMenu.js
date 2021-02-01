import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
const screens = ['Home', 'Profile', 'Settings'];

const LeftMenu = ({ state, navigation }) => (
  <View style={container}>
    {screens.map((screen, index) => (
      <TouchableOpacity key={index.toString()} onPress={() => navigation.navigate(screen)} style={buttonStyle}>
        <Text style={buttonText}>{screen}</Text>
      </TouchableOpacity>
    ))}
    <View style={bottomContainer}>
      <Text style={bottomText}>Do you like this sidebar?</Text>
    </View>
  </View>
);

const container = {
  flex: 1,
  padding: 16,
};

const bottomContainer = {
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  paddingBottom: 16,
};

const buttonStyle = {
  padding: 16,
};

const buttonText = {
  fontWeight: 'bold',
  fontSize: 24,
  color: '#555',
};

const bottomText = {
  fontWeight: 'bold',
};

export default LeftMenu;
