import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './RoundedButtonStyles';

export const RoundedButton = ({
  style = {},
  size = 125,
  textStyle = {},
  ...props
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={props.onPress}
        style={[styles(size).button, style]}>
        <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
