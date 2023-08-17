import React, { Component } from "react";
import { Text, SafeAreaView, Image, ScrollView, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useBookmark } from "../../BookmarkContext";
import { LogBox } from 'react-native';

LogBox.ignoreLogs([ 'Non-serializable values were found in the navigation state', ]);
 

const policy = {
    title : "Hours of works",
    subtitle1: "Standard work hours",
    paragraph1:"Standard work hours are eight hours in a day and 40 hours in a week. A week is from Sunday to Saturday.\n\nStandard work hours may be different if an employee is working under an averaging agreement or a variance.",
    subtitle2:"Overtime work hours",
    paragraph2:"Employees can be required to work overtime. Employees who work more than eight hours in a day or 40 hours in a week must be paid time-and-a-half or double-time for overtime hours worked.\n\n\u2B24 Find out how to calculate overtime pay\n\u2B24 Learn about overtime for employees under an averaging agreement",
    subtitle3:"Minimum daily work hours",
    paragraph3:"Employees must be scheduled for at least two hours of work. They must also be paid if they report to work as scheduled and there is no work for them to do.\n\nFind out how to calculate minimum daily pay",
    subtitle4:"Scheduling hours free from work",
    paragraph4:"An employee must have at least 32 hours in a row free from work each week. If an employee works during this period (e.g. because of an emergency), they must be paid extra pay.\n\nAn employee must also have at least eight hours off between shifts. If an employee works during this period, the hours are added to other hours worked in the day. This usually means the employee must be paid at overtime rates.\n\nExample: A person who works a six-hour shift (6 am to 12 pm) five days a week is asked to work an extra four hours (2 pm to 6 pm). That gives them 10 hours for that day. They should be paid two hours at overtime rates.",
    subtitle5:"Scheduling meal and coffee breaks",
    paragraph5:"Employers are not required to provide coffee breaks.\n\nA 30-minute unpaid meal break must be provided when an employee works more than five hours in a row. The employee must be paid for the meal break if they're required to work (or be available to work) during their meal break. Working through a meal break does not always result in overtime pay.",
    subtitle6:"Scheduling split shifts",
    paragraph6:"A split shift divides a work day into separate periods of work. The employee's work day is the combined total of the hours worked during all of the periods.\n\nThe split shift (including breaks) must be completed within a 12-hour period.",
    subtitle7:"\n\n\n\n\n",
    paragraph7:"\n\n\n\n\n\n",
  }
export default class Page1_English extends Component {
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
                source={require("../../pictures/page1.png")}
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
            <Text style={styles.subtitle}>{policy["subtitle7"]}</Text>
            <Text style={styles.paragraph}>{policy["paragraph7"]} </Text>
        </ScrollView>
        </View>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              const { bookMark, setBookMark } = this.props.route.params;
              let found = false;
              for (let i = 0; i < bookMark.length; i++) {
                if (bookMark[i].number == 1) {
                  found = true;
                  break;
                }
              }
              if (!found) {
                const item = { name: "card1", title: 'Hours of Works', number: 1 };
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
