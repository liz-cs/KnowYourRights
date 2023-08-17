import React, { Component } from "react";
import { Text, SafeAreaView, Image, ScrollView, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useBookmark } from "../../BookmarkContext";
 
const policy = {
    title : "Renunciar",
    paragraph1:"Tanto los empleados como los empleadores pueden terminar el empleo. Los empleados deben considerar si son elegibles para un permiso de ausencia con protección laboral si necesitan ausentarse del trabajo para lidiar con una enfermedad o situaciones inesperadas.",

    subtitle2:"Renunciar o ser despedido",
    paragraph2:"Los empleados pueden renunciar a su trabajo en cualquier momento. Si un empleado renuncia a su trabajo, no se le paga compensación por la duración del empleo. Los empleadores pueden terminar el trabajo de un empleado dando aviso de trabajo por escrito o pago (llamado compensación por tiempo de servicio). También pueden optar por dar una combinación de aviso y pago. ​ ​",

    subtitle3:"despidos temporales",
    paragraph3:"Un despido temporal es cuando un empleado gana menos del 50% de su salario semanal regular, con el plan de que el empleado regrese a un horario de trabajo regular.\nSi el empleado no va a regresar al trabajo, el despido es una terminación del empleo.",

    subtitle4:"Terminaciones de grupo",
    paragraph4:"Si las circunstancias requieren el despido de 50 o más empleados en una misma localidad dentro de un período de dos meses, el empleador debe notificar por escrito el despido grupal a cada empleado afectado, al Ministro de Trabajo y a cualquier sindicato que represente a los empleados.",

    subtitle5:"\n\n\n",
    paragraph5:"\n\n\n\n\n\n",
  }
export default class Page4_Spanish extends Component {
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
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
              const { bookmarkSpanish, setBookmarkSpanish } = this.props.route.params;
              let found = false;
              for (let i = 0; i < bookmarkSpanish.length; i++) {
                if (bookmarkSpanish[i].number == 4) {
                  found = true;
                  break;
                }
              }
              if (!found) {
                const item = {name : "card4", title:'Renunciar', number:4};
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
