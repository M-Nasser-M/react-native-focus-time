import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './TimerStyles';
import CountDown from '../../components/CountDown/CountDown';
import { RoundedButton } from '../../components/RoundedButton/RoundedButton';
import { ProgressBar } from 'react-native-paper';

export default function Timer({ focusSubject , clearSubject }) {
  const [paused, setPaused] = useState(true);
  const [minutes,setMinutes] =useState(20)
  const handleStart = () => {
    setPaused(false);
  };
  const handlePause = () => {
    setPaused(true);
  };
  const hadleChangeTime = (m) => {
    setMinutes(m)
  };
  return (
    <>
      <CountDown minutes={minutes} paused={paused}></CountDown>
      <View style={styles.container}>
        <Text style={styles.title}>we are focusing on</Text>
        <Text style={styles.taks}>{focusSubject}</Text>
        <View style={styles.timeButtonContainer}>
          <RoundedButton
            onPress={() => hadleChangeTime(5)}
            textStyle={styles.buttonText}
            title={'5'}
            size={75}
            style={styles.button}></RoundedButton>
          <RoundedButton
            onPress={() => hadleChangeTime(10)}
            textStyle={styles.buttonText}
            title={'10'}
            size={75}
            style={styles.button}></RoundedButton>
          <RoundedButton
            onPress={() => hadleChangeTime(15)}
            textStyle={styles.buttonText}
            title={'15'}
            size={75}
            style={styles.button}></RoundedButton>
        </View>
        {paused ? (
          <RoundedButton
            onPress={handleStart}
            textStyle={styles.buttonText}
            title={'Start'}
            size={175}
            style={styles.button}></RoundedButton>
        ) : (
          <RoundedButton
            onPress={handlePause}
            textStyle={styles.buttonText}
            title={'Pause'}
            size={175}
            style={styles.button}></RoundedButton>
        )}
        <RoundedButton
            onPress={clearSubject}
            textStyle={styles.buttonText}
            title={'Cancel'}
            size={150}
            style={styles.button}></RoundedButton>
      </View>
    </>
  );
}
