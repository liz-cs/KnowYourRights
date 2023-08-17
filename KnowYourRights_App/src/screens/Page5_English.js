import React, { Component } from "react";
import { Text, SafeAreaView, Image, ScrollView, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LogBox } from 'react-native';

LogBox.ignoreLogs([ 'Non-serializable values were found in the navigation state', ]);

 
const policy = {
    title : "Hours of works",
    paragraph1:"Employees must be paid for the work they do. They should get at least minimum wage for hours worked in each pay period.",
    subtitle2:"Employees must be paid twice per month",
    paragraph2:"Pay periods cannot be longer than 16 days. All money earned, including overtime and statutory holiday pay, must be paid within eight days after the end of the pay period. Annual vacation pay and wages in an employee’s time bank do not need to be paid within the pay period.\n\n Wages must be paid in Canadian currency. Payment can be cash, cheque, bank draft, or money order. It can also be made by direct deposit to an employee's bank account if this agreed to in writing or if this arrangement is part of a collective agreement. Farm labour contractors must pay wages directly to an employee's bank account. \n\n When employment ends, employers must pay employees their final wages.",
    subtitle3:"Minimum wage",
    paragraph3:"All employees must be paid at least minimum wage. The minimum wage in British Columbia is $15.20 per hour.",
    subtitle4:"Minimum daily pay",
    paragraph4:"An employee who reports for work must be paid for at least two hours, even if they work less than two hours.",
    subtitle5:"Deductions",
    paragraph5:"Employers are legally required to make certain deductions from wages. Business costs cannot be deducted from wages.",
    subtitle6:"Keeping records",
    paragraph6:"Employers must keep a record of the hours worked by each employee and provide a pay statement every payday.",
    subtitle7:"Tips and gratuities",
    paragraph7:"Employers can collect tips and distribute them to all employees who shared in earning them.",
    subtitle8:"Uniforms and special clothing",
    paragraph8:"A dress code is different than a uniform. Employers must provide uniforms at no cost to employees.",
    subtitle9:"Statutory holiday pay",
    paragraph9:"Employees get statutory holiday pay if they qualify. If they work on a stat holiday, they get time-and-a-half plus an average day's pay.",
    subtitle10:"Paid time off",
    paragraph10:"Employees can earn paid vacation days. Most job-protected leaves are unpaid. Employers are required to pay for some types of leave.",
    subtitle11:"\n\n\n",
    paragraph11:"\n\n\n\n\n\n",
  }
export default class Page5_English extends Component {
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
                  source={require("../../pictures/page5.png")}
                  style={styles.avatar}
              />
            </View>
            <Text style={styles.title}>{policy["title"]}</Text>
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
            <Text style={styles.subtitle}>{policy["subtitle8"]}</Text>
            <Text style={styles.paragraph}>{policy["paragraph8"]} </Text>
            <Text style={styles.subtitle}>{policy["subtitle9"]}</Text>
            <Text style={styles.paragraph}>{policy["paragraph9"]} </Text>
            <Text style={styles.subtitle}>{policy["subtitle10"]}</Text>
            <Text style={styles.paragraph}>{policy["paragraph10"]} </Text>
            <Text style={styles.subtitle}>{policy["subtitle11"]}</Text>
            <Text style={styles.paragraph}>{policy["paragraph11"]} </Text>
        </ScrollView>
        </View>
        <View style={{alignItems:'center'}}>
        <TouchableOpacity style={styles.button} onPress={() => {
            const { bookMark, setBookMark } = this.props.route.params;
            let found = false;
            for (let i = 0; i < bookMark.length; i++) {
              if (bookMark[i].number == 5) {
                found = true;
                break;
              }
            }
            if (!found) {
              const item = {name : "card5", title:'Getting Paid for Work', number:5};
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
