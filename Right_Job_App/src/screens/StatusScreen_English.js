import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

const StatusScreen_English = (props) => {
    // const { language } = props.route.params;
    // console.log(language);

    return (
    <View style={{backgroundColor:"#22C7A9", flex:1}}>
        <Image source={require("../../pictures/newstatus.png")} style={styles.image}/>
        <Text style={styles.title}>Choose Your Status</Text>
        <TouchableOpacity onPress = {()=> props.navigation.navigate("Homes_English")} style={styles.selections}>
        <Text style={styles.text}>Employee</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {()=>props.navigation.navigate("Homes_English")} style={styles.selections}>
        <Text style={styles.text}>Employer</Text>
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
        marginLeft:'13.5%',
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

export default StatusScreen_English;