import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from 'react-native';
// import ListScreen from './ListScreen';

const LanguageScreen = ({navigation}) => {
  // console.log(props.navigation);
  return (
    <View style={{backgroundColor:"#22C7A9", flex:1}}>
    <Image source={require('../../pictures/newlanguage.png')} style ={styles.image}  />
      <Text style={styles.title}>
        Preferred Language
      </Text>
      <TouchableOpacity onPress = {()=>navigation.navigate("Status", {language: "English"})} style={styles.selections}>
        <Text style={styles.text}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {()=>navigation.navigate("Estado", {language: "Español"})} style={styles.selections}>
        <Text style={styles.text}>Español</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginTop:'3%',
  },
  image:{
    width:240,
    height:260,
    marginTop:'20%',
    marginLeft:'20%',
  },
  title:{
    color:"#FFFFFF",
    fontWeight: 'bold',
    fontSize:30,
    marginTop:'8%',
    marginLeft:'15%',
  },
  selections:{
    backgroundColor:"#F3F3F3",
    borderRadius:15,
    width:300,
    height: 50,
    alignItems:'center',
    marginLeft:"10%",
    marginTop:'5%',
  }
});

export default LanguageScreen;
