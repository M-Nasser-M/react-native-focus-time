import { StyleSheet,Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#665687',
    paddingTop: 20,
    alignItems:"center"
  },
  title: { color: 'white', textAlign: 'center' },
  taks: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
  button:{
    marginTop:20,
  },
  buttonText:{
    fontWeight:"bold",
    fontSize:40
  },timeButtonContainer:{
    flexDirection:"row",
    width:Dimensions.get("window").width,
    justifyContent:"space-evenly"
  }
});

