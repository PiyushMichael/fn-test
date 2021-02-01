import React from 'react';
import {View, Text} from 'react-native';
import SidebarToggle from 'SidebarToggle';
import {container, heading, description} from './styles';

const Home = ({ navigation, form }) => {
  return (
    <>
      <SidebarToggle navigation={navigation} />
      <View style={container}>
        <Text style={heading}>Home</Text>
        <Text style={description}>This is a test app for ForeignNerds job application. It has a bottomtab navigator nested inside a drawer navigator to give the illlusion of a bottom tab navigator which has a sidebar.</Text>
        <Text style={description}>Both bottom tab and sidebar menu are custom components. Thi app uses redux store for global data management.</Text>
      </View>
    </>
  );
};

export default Home;
