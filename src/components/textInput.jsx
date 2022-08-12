import React from 'react';
import {TextInput} from 'react-native';
import {styles} from '../Style';

export const TextInputBase = props => {
  const {value, onChangeText, placeholder, keyboardType = "default"} = props;
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
      style={styles.inputStyle}
    />
  );
};
