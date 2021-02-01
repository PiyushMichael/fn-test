import React from 'react';
import {Text} from 'react-native';
import { connect } from 'react-redux';
import SidebarToggle from 'SidebarToggle';

const Profile = ({ navigation, form }) => {
  console.log(form);
  return (
    <>
      <SidebarToggle navigation={navigation} />
      <Text>hello</Text>
    </>
  );
};

const mapStateToProps = state =>({
  form: state.form,
});

export default connect(mapStateToProps, {})(Profile);
