import React, { Component } from "react";
import { Text, SafeAreaView, Image, ScrollView, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useBookmark } from "../../BookmarkContext";

const policy = {
  title : "Tomar tiempo libre",

  subtitle1: "Vacaciones anuales",
  
  paragraph1:"Después de un año de trabajo, los empleados pueden tomar días de vacaciones - tiempo libre remunerado. Los empleadores pueden permitir que los empleados usen el tiempo de vacaciones para lidiar con situaciones inesperadas.\n\nUn empleador puede programar las vacaciones de sus empleados de acuerdo con las necesidades del negocio.",
  
  subtitle2:"Tomar tiempo libre inesperado",
  
  paragraph2:"Los empleados pueden pedir un permiso de ausencia del trabajo para lidiar con enfermedades o situaciones inesperadas, y el trabajo de un empleado será protegido en su ausencia. Los empleados pueden tomar tal permiso para cosas como responsabilidades familiares o como licencia por enfermedad.",
  
  subtitle3:"Manejo de las ausencias de los empleados",
  
  paragraph3:"Los empleadores deben seguir los estándares de empleo de B.C si su negocio se interrumpe inesperadamente o si los empleados deben ausentarse del trabajo.",
  
  subtitle4:"Licencias laborales protegidas",
  
  paragraph4:"El trabajo de un empleado está protegido mientras esté en uno de los siguientes permisos de ausencia: \n\nLicencia por enfermedad o lesión (tambien conocido como permiso por enfermedad) \nLicencia de maternidad y paternidad \nlicencia por responsabilidad familiar \nLicencia por cuidado compasivo \nLicencia por enfermedad crítica o lesión \nLicencias relacionadas con COVID-19 \nlicencia de reservistas \nLicencia respecto a la desaparición de un hijo \nSalir respecto a la muerte de un hijo \nLicencia por violencia doméstica o sexual \nlicencia por duelo \nLicencia de servicio de jurado",
  
  subtitle5:"Los días feriados",
  
  paragraph5:"Un feriado legal no necesariamente significa que los empleados tengan un día libre. En cambio, los empleados pueden calificar por salario de dias feriados.",    

  subtitle6:"\n\n\n",
  paragraph6:"\n\n\n\n\n\n",
}
export default class Page3_Spanish extends Component {
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
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
              const { bookmarkSpanish, setBookmarkSpanish } = this.props.route.params;
              let found = false;
              for (let i = 0; i < bookmarkSpanish.length; i++) {
                if (bookmarkSpanish[i].number == 3) {
                  found = true;
                  break;
                }
              }
              if (!found) {
                const item = {name : "card3", title:'Tomar tiempo libre',number:3};
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
