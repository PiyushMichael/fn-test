import React from 'react';
import {Text} from 'react-native';
import { connect } from 'react-redux';
import SidebarToggle from 'SidebarToggle';

const Settings = ({ navigation, form }) => {
  return (
    <>
      <SidebarToggle navigation={navigation} />
      <Text>settings</Text>
    </>
  );
};

const mapStateToProps = state =>({
  form: state.form,
});

export default connect(mapStateToProps, {})(Settings);
