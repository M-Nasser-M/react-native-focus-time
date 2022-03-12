import React from 'react';
import { View, FlatList, Text } from 'react-native';
import {RoundedButton} from "../../components/RoundedButton/RoundedButton"
import { styles } from './FocusHistoryStyles';

const listItem = ({ item }) => <Text style={styles.text}>{item}</Text>;

export default function FocusHistory({ history , clearHistory }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>We Focused On</Text>
      <FlatList
        renderItem={listItem}
        keyExtractor={(item) => item}
        data={history}
        style={styles.list}
      />
      <RoundedButton onPress={clearHistory} style={styles.clearButton} size={100} title="clear"/>
    </View>
  );
}
