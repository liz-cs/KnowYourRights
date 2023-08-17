import React, { Component } from "react";
import { Text, SafeAreaView, Image, ScrollView, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LogBox } from 'react-native';

LogBox.ignoreLogs([ 'Non-serializable values were found in the navigation state', ]);


const policy = {
    title : "Statutory holiday",
    subtitle1: "2022 statutory holidays",
    paragraph1:"Holiday	Date\nNew Year's Day	Saturday, January 1\nFamily Day	Monday, February 21\nGood Friday	Friday, April 15\nVictoria Day	Monday, May 23\nCanada Day	Friday, July 1\nB.C. Day	Monday, August 1\nLabour Day	Monday, September 5\nThanksgiving Day	Monday, October 10\nRemembrance Day	Friday, November 11\nChristmas Day	Sunday, December 25"  ,
}
export default class Page2_English extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    return (
      <SafeAreaView>

        <View style={{height:'90%'}}>

        <ScrollView style={{width:'90%',height:1000, marginLeft:'5%', marginTop:10, flex:1}}>
            <View style={styles.conatiner}>
              <Image
                  source={require("../../pictures/page2.png")}
                  style={styles.avatar}
              />
            </View>
            <Text style={styles.title}>{policy["title"]}</Text>
            <Text style={styles.subtitle}>{policy["subtitle1"]}</Text>
            <Text style={styles.paragraph}>{policy["paragraph1"]} </Text>
        </ScrollView>
        </View>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity style={styles.button} onPress={() => {
            const { bookMark, setBookMark } = this.props.route.params;
            let found = false;
            for (let i = 0; i < bookMark.length; i++) {
              if (bookMark[i].number == 2) {
                found = true;
                break;
              }
            }
            if (!found) {
              const item = {name : "card2", title:'Statutory Holiday',number:2};
              setBookMark([...bookMark, item]);
            }
          }
        }>
        <Text style={{color:'#FFFFFF', fontWeight:'700',fontSize:28}}>Save</Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    conatiner:{
        marginTop:5,
        height:'60%',
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
