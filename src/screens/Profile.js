import React from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';
import SidebarToggle from 'SidebarToggle';
import {container, heading, subheading, description} from './styles';

const Profile = ({ navigation, form }) => (
  <>
    <SidebarToggle navigation={navigation} />
    <View style={container}>
      <Text style={heading}>Profile</Text>
      <Text style={subheading}>Username: {form.name}</Text>
      <Text style={description}>Information in this screen can be edited from the settings screen and is stored in redux store.</Text>
    </View>
  </>
);

const mapStateToProps = state =>({
  form: state.form,
});

export default connect(mapStateToProps, {})(Profile);
