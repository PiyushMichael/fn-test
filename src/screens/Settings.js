import React from 'react';
import {View, Text, TextInput} from 'react-native';
import { connect } from 'react-redux';
import SidebarToggle from 'SidebarToggle';
import { setForm as setFormAction } from 'Actions';
import {container, heading, subheading, description, textfield} from './styles';

const Settings = ({ navigation, form, setForm }) => {
  const updateName = (e) => {
    setForm({ name: e.nativeEvent.text });
  };

  return (
    <>
      <SidebarToggle navigation={navigation} />
      <View style={container}>
        <Text style={heading}>Settings</Text>
        <Text style={subheading}>Username: {form.name}</Text>
        <TextInput value={form.name} onChange={updateName} style={textfield} placeholder="Enter Username..." />
        <Text style={description}>No need for seperate submit button! Values are updated in store on the fly.</Text>
      </View>
    </>
  );
};

const mapStateToProps = state =>({
  form: state.form,
});

export default connect(mapStateToProps, { setForm: setFormAction })(Settings);
