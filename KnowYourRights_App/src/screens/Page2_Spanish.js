import React, { Component } from "react";
import { Text, SafeAreaView, Image, ScrollView, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useBookmark } from "../../BookmarkContext";

const policy = {
    title : "Días festivos",
    subtitle1: "2022 vacaciones legales",
    paragraph1:"Fecha de vacaciones\nDía de Año Nuevo sábado, 1 de enero\nDía de la familia lunes 21 de febrero\nViernes Santo Viernes, 15 de abril\nDía de Victoria Lunes, 23 de mayo\nDía de Canadá viernes, 1 de julio\nDía de B.C. lunes, 1 de agosto\nDía del Trabajo lunes, 5 de septiembre\nDía de Acción de Gracias lunes 10 de octubre\nDía del Recuerdo viernes, 11 de noviembre\nDia de Navidad domingo, 25 de diciembre",
}
export default class Page2_Spanish extends Component {
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              const { bookmarkSpanish, setBookmarkSpanish } = this.props.route.params;
              let found = false;
              for (let i = 0; i < bookmarkSpanish.length; i++) {
                if (bookmarkSpanish[i].number == 2) {
                  found = true;
                  break;
                }
              }
              if (!found) {
                const item = {name : "card2", title:'Días festivos',number:2};
                setBookmarkSpanish([...bookmarkSpanish, item]);
              }
            }
          }
          >
        <Text style={{color:'#FFFFFF', fontWeight:'700',fontSize:28}}>Guardar</Text>
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
