import React, { Component } from "react";
import { Text, SafeAreaView, Image, ScrollView, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LogBox } from 'react-native';

LogBox.ignoreLogs([ 'Non-serializable values were found in the navigation state', ]);

 
const policy = {
    title : "Quit, fired or laid off",
    paragraph1:"Both employees and employers can end employment. Employees should consider whether they are eligible for a job-protected leave of absence if they need to take time off work to deal with illness or life situations.",
    subtitle2:"Quitting or getting firedime work hours",
    paragraph2:"Employees can quit their job at any time. If an employee quits their job, they're not paid compensation for length of employment.\n Employers can end an employee's job by giving written working notice or pay (called compensation for length of service). They can also choose to give a combination of both notice and pay. ​",
    subtitle3:"Temporary layoffs",
    paragraph3:"A temporary layoff is when an employee earns less than 50% of their regular weekly wages – with the plan that the employee will return to a regular work schedule.\n If the employee won't be returning to work, the layoff is a termination of employment.",
    subtitle4:"Group terminations",
    paragraph4:"If circumstances require terminating 50 or more employees at a single location within a two-month period, the employer must give written notice of group termination to each employee affected, the Minister of Labour, and any trade union that represents the employees.",
    subtitle5:"\n\n\n",
    paragraph5:"\n\n\n\n\n\n",
  }
export default class Page4_English extends Component {
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
                source={require("../../pictures/page4.png")}
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
        </ScrollView>
        </View>
        <View style={{alignItems:'center'}}>
        <TouchableOpacity style={styles.button} onPress={() => {
            const { bookMark, setBookMark } = this.props.route.params;
            let found = false;
            for (let i = 0; i < bookMark.length; i++) {
              if (bookMark[i].number == 4) {
                found = true;
                break;
              }
            }
            if (!found) {
              const item = {name : "card4", title:'Quit, Fired or Laid off', number:4};
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
        height:'20%',
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
