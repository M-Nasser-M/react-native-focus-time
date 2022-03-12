import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from './CountDownStyles';

const addZero = (no) => (no >= 10 ? no : `0${no}`);

export default function CountDown(props) {
  const [minutes, setMinutes] = useState(props.minutes || 20);
  const [seconds, setSeconds] = useState(props.seconds || 0);

  useEffect(()=>{
    setMinutes(props.minutes)
  },[props.minutes]);

  useEffect(() => {
    if (
      !props.paused &&
      ((minutes > 0 && seconds >= 0) || (minutes === 0 && seconds > 0))
    )
      setTimeout(() => {
        seconds === 0 ? setSeconds(59) : setSeconds(seconds - 1);
        if (seconds === 0) setMinutes(minutes - 1);
      }, 1000);
    if (minutes === 0 && seconds === 0) alert('Congrats we are done');
  }, [minutes, seconds, props.paused]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${addZero(minutes)}:${addZero(
        seconds
      )}`}</Text>
    </View>
  );
}
