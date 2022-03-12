import {StyleSheet} from "react-native"

export const styles = (size) =>
  StyleSheet.create({
    button: {
      borderRadius: size / 2,
      height: size,
      width: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth:2,
      borderColor:"white",
    },
    text: {
      color: 'white',
      fontSize: size / 3,
    },
  });
