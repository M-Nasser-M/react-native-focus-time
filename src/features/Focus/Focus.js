import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import Constants from 'expo-constants';
import { RoundedButton } from '../../components/RoundedButton/RoundedButton';
import { styles } from './FocusStyles';

// You can import from local files

export default function Focus({ addSubject , history ,setHistory}) {
  const [tmpSubject, setTmpSubject] = useState(null);
  

  const handleSubmit = ({ nativeEvent }) => {
    addSubject(nativeEvent.text);
    setHistory([...history,nativeEvent.text])
  };

  const handleChange = ({ nativeEvent }) => {
    setTmpSubject(nativeEvent.text);
  };

  const handlePress = ({ nativeEvent }) => {
    addSubject(tmpSubject);
    setHistory([...history,tmpSubject])
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>what would you like to focus on?</Text>
      <View style={styles.buttonContainer}>
        <TextInput
          type="outlined"
          placeholder={'Focus Subject'}
          onChange={handleChange}
          onSubmitEditing={handleSubmit}
          style={styles.textInput}
        />
        <RoundedButton onPress={handlePress} title="+" size={40} />
      </View>
    </View>
  );
}
