import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, Image, TextInput, View, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Page6_English = () => {
  // const [text, onChangeText] = React.useState("Useless Text");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [complaint, setComplaint] = React.useState("");

  const sendMsg = () => {
    alert("Your complaint will be sent to WelcomBC!");
    setName("");
    setEmail("");
    setComplaint("");
  }

  return (
    <SafeAreaView>
      <View style={styles.conatiner}>
        <Image
            source={require("../../pictures/page6.png")}
            style={styles.avatar}
        />
      </View>
      <Text style={styles.title}>Make A Complaint</Text>
      <Text style={styles.paragraph}>Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={e=>setName(e)}
        value={name}
        placeholder="Your Name"
        keyboardType="default"
      />
      <Text style={styles.paragraph}>Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Your Email"
        keyboardType="email-address"
      />
      <Text style={styles.paragraph}>Complaint:</Text>
      <TextInput
        style={styles.inputComplaint}
        onChangeText={setComplaint}
        value={complaint}
        placeholder="Enter Your Complaint"
        keyboardType="default"
        multiline={true}
        maxLength={200}
      />
      <View style={{alignItems:'center'}}>
        <TouchableOpacity style={styles.button} onPress={sendMsg}>
        <Text style={{color:'#FFFFFF', fontWeight:'700',fontSize:28}} >Send</Text>
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

export default Page6_English;