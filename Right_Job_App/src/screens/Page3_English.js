import React, { Component } from "react";
import { Text, SafeAreaView, Image, ScrollView, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LogBox } from 'react-native';

LogBox.ignoreLogs([ 'Non-serializable values were found in the navigation state', ]);


const policy = {
    title : "Taking time off",
    subtitle1: "Annual vacation",
    paragraph1:"After one year of work, employees get to take vacation days – time off with pay. \n\nEmployers may allow employees to use vacation time to deal with unexpected situations. An employer can schedule your vacation according to business needs.",
    subtitle2:"Taking unexpected time off",
    paragraph2:"Employees can take time away from work to deal with unexpected illnesses or life situations. An employee's job is protected while they are on leave. Employees can take a leave of absence for things like family responsibilities or sick days.",
    subtitle3:"Handling employee absences",
    paragraph3:"Employers need to follow B.C. employment standards if their business is unexpectedly disrupted or employees must be absent from work.",
    subtitle4:"Job-protected leaves of absence",
    paragraph4:"An employee's job is protected while they are on one of the following leaves of absence: \n\nIllness or injury leave (sometimes called sick leave) \nMaternity and parental leave \nFamily responsibility leave \nCompassionate care leave \nCritical illness or injury leave \nCOVID-19 related leaves \nReservists’ leave \nLeave respecting the disappearance of a child \nLeave respecting the death of a child \nLeave respecting domestic or sexual violence \nBereavement leave \nJury duty leave",
    subtitle5:"Statutory holidays",
    paragraph5:"A statutory holiday does not necessarily mean employees get a day off. Instead, employees may qualify for statutory holiday pay.",
    subtitle6:"\n\n\n",
    paragraph6:"\n\n\n\n\n\n",
}
export default class Page3_English extends Component {
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
                  source={require("../../pictures/page3.png")}
                  style={styles.avatar}
              />
            </View>
            <Text style={styles.title}>{policy["title"]}</Text>
            <Text style={styles.subtitle}>{policy["subtitle1"]}</Text>
            <Text style={styles.paragraph}>{policy["paragraph1"]} </Text>
            <Text style={styles.subtitle}>{policy["subtitle2"]}</Text>
            <Text style={styles.paragraph}>{policy["paragraph2"]} </Text>
            <Text style={styles.subtitle}>{policy["subtitle3"]}</Text>
            <Text style={styles.paragraph}>{policy["paragraph3"]} </Text>
            <Text style={styles.subtitle}>{policy["subtitle4"]}</Text>
            <Text style={styles.paragraph}>{policy["paragraph4"]} </Text>
            <Text style={styles.subtitle}>{policy["subtitle5"]}</Text>
            <Text style={styles.paragraph}>{policy["paragraph5"]} </Text>
            <Text style={styles.subtitle}>{policy["subtitle6"]}</Text>
            <Text style={styles.paragraph}>{policy["paragraph6"]} </Text>
        </ScrollView>
        </View>
        <View style={{alignItems:'center'}}>
        <TouchableOpacity style={styles.button} onPress={() => {
            const { bookMark, setBookMark } = this.props.route.params;
            let found = false;
            for (let i = 0; i < bookMark.length; i++) {
              if (bookMark[i].number == 3) {
                found = true;
                break;
              }
            }
            if (!found) {
              const item = {name : "card3", title:'Taking Time Off',number:3};
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
        height:'15%',
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
