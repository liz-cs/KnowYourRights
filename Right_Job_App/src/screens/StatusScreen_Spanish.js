import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

const StatusScreen_Spanish = (props) => {
    // const { language } = props.route.params;
    // console.log(language);

    return (
    <View style={{backgroundColor:"#22C7A9", flex:1}}>
        <Image source={require("../../pictures/newstatus.png")} style={styles.image}/>
        <Text style={styles.title}>Elija su estado</Text>
        <TouchableOpacity onPress = {()=> props.navigation.navigate("Homes_Spanish")} style={styles.selections}>
        <Text style={styles.text}>Empleada/Empleado</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {()=>props.navigation.navigate("Homes_Spanish")} style={styles.selections}>
        <Text style={styles.text}>Empleadora/Empleador</Text>
      </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize : 45,
    },
    nameStye:{
        fontSize: 20
    },
    image:{
        width:300,
        height:260,
        marginTop:'20%',
        marginLeft:'10%',
    },
    title:{
        color:"#FFFFFF",
        fontWeight: 'bold',
        fontSize:30,
        marginTop:'8%',
        marginLeft:'25%',
    },
    selections:{
        backgroundColor:"#F3F3F3",
        borderRadius:15,
        width:300,
        height: 50,
        alignItems:'center',
        marginLeft:"10%",
        marginTop:'5%',
    },
    text: {
        fontSize: 20,
        marginTop:'3%',
    },
});

export default StatusScreen_Spanish;