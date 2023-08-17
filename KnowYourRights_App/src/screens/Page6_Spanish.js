import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, Image, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Page6_Spanish = () => {
  // const [text, onChangeText] = React.useState("Useless Text");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [complaint, setComplaint] = React.useState("");

  const sendMsg = () => {
    alert("Su queja ha sido enviada a WelcomBC");
    setName("");
    setEmail("");
    setComplaint("");
  }

  return (
    <SafeAreaView>
      <View style={styles.conatiner}>
        <Image
            // source={require("../pictures/avatar1.png")}
            source={require("../../pictures/page6.png")}
            style={styles.avatar}
        />
      </View>
      <Text style={styles.title}>Hacer una queja</Text>
      <Text style={styles.paragraph}>Nombre:</Text>
      <TextInput
        style={styles.input}
        onChangeText={e=>setName(e)}
        value={name}
        placeholder="Su nombre"
        keyboardType="default"
      />
      <Text style={styles.paragraph}>Correo electrónico:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Tu correo electrónico"
        keyboardType="email-address"
      />
      <Text style={styles.paragraph}>Queja:</Text>
      <TextInput
        style={styles.inputComplaint}
        onChangeText={setComplaint}
        value={complaint}
        placeholder="Ingrese su queja"
        keyboardType="default"
        multiline={true}
        maxLength={200}
      />
      <View style={{alignItems:'center'}}>
        <TouchableOpacity style={styles.button} onPress={sendMsg}>
        <Text style={{color:'#FFFFFF', fontWeight:'700',fontSize:28}}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputComplaint: {
    height: 120,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  conatiner:{
    marginTop:5,
    height:'22%',
    alignItems:'center',
    // backgroundColor:'red',
  },
  avatar:{
      width:'90%',
      height:'100%',
  },
  title:{
      marginTop:20,
      fontWeight:'bold',
      fontSize:32,
      color:'#3F3D56',
  },
  subtitle:{
      color:'#3F3D56',
      fontWeight:'500',
      fontSize:18,
      marginTop:15,
  },
  paragraph:{
      color:'#888888',
      marginTop:8,
  },
  button:{
      backgroundColor:'#22C7A9', 
      height:50, 
      width:250, 
      alignItems:'center',
      borderRadius:20,
      justifyContent:'center',
      shadowColor: 'rgba(0,0,0, 0.4)',
      shadowOffset: { height: 3, width: 3 }, 
      shadowOpacity: 1, 
      shadowRadius: 2, 
  },
});

export default Page6_Spanish;