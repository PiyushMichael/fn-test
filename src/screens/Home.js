import React from 'react';
import {Text} from 'react-native';
import SidebarToggle from 'SidebarToggle';

const Home = ({ navigation, form }) => {
  return (
    <>
      <SidebarToggle navigation={navigation} />
      <Text>home</Text>
    </>
  );
};

export default Home;
