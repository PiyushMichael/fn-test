import React from 'react';
import {Text} from 'react-native';
import { connect } from 'react-redux';

const Profile = ({ form }) => {
  console.log(form);
  return (
    <>
      <Text>hello</Text>
    </>
  );
};

const mapStateToProps = state =>({
  form: state.form,
});

export default connect(mapStateToProps, {})(Profile);
