import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {styles} from '../Style';

export const Button = props => {
  const {label, onButtonClick, mode = 'contained', style={}} = props;
  let buttonStyle = mode === 'outlined' ? outlinedStyle : containedStyle
  buttonStyle = [...buttonStyle, style];

  return (
    <TouchableOpacity
      onPress={onButtonClick}
      style={buttonStyle}>
      <Text style={mode === 'outlined' ? styles.buttonOutlinedTextColor : styles.buttonContainedTextColor}>{label}</Text>
    </TouchableOpacity>
  );
};

const outlinedStyle = StyleSheet.compose(
  styles.buttonStyle,
  styles.buttonOutlinedStyle,
);
const containedStyle = StyleSheet.compose(
  styles.buttonStyle,
  styles.buttonContainedStyle,
);
